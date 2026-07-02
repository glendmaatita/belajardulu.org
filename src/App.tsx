import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
// Halaman berat di-split per-route agar bundel awal (landing) tetap ringan di HP.
const TopicHome = lazy(() => import("./pages/TopicHome").then((m) => ({ default: m.TopicHome })));
const LessonPage = lazy(() => import("./pages/LessonPage").then((m) => ({ default: m.LessonPage })));
const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const Admin = lazy(() => import("./pages/Admin").then((m) => ({ default: m.Admin })));
import { AuthProvider } from "./lib/auth";
import { ProgressProvider } from "./lib/progress";
import { ActivityProvider } from "./lib/activity";

// Scroll ke atas tiap pindah halaman. Hormati anchor hash (mis. #kurikulum)
// dengan men-scroll ke elemennya alih-alih ke atas.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <ActivityProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Suspense
              fallback={
                <div className="grid h-[60vh] place-items-center text-ink-faint">
                  <span className="text-sm">Memuat…</span>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/saya" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/:topicId" element={<TopicHome />} />
                <Route path="/:topicId/pelajaran/:id" element={<LessonPage />} />
                <Route path="*" element={<Landing />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
        </ActivityProvider>
      </ProgressProvider>
    </AuthProvider>
  );
}
