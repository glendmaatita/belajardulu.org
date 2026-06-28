# syntax=docker/dockerfile:1

# ===== Builder: install deps (incl. native better-sqlite3) and build the SPA =====
FROM node:22-bookworm-slim AS builder
WORKDIR /app

# Toolchain needed to compile native modules (better-sqlite3)
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
COPY .env.production.template .env.local
# tsc -b && vite build -> outputs static assets to /app/dist
RUN npm run build

# ===== Runner: minimal image that serves the app =====
FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8787

# Runtime artifacts only. node_modules carries the already-compiled
# better-sqlite3 plus tsx (used to run the TypeScript server).
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/package.json ./package.json

# SQLite database lives here (DB_PATH defaults to /app/data/app.db).
RUN mkdir -p /app/data
VOLUME ["/app/data"]

EXPOSE 8787

# npm start -> NODE_ENV=production tsx server/index.ts
CMD ["npm", "start"]
