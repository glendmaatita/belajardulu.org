import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { TopicHome } from "./pages/TopicHome";
import { LessonPage } from "./pages/LessonPage";
import { Dashboard } from "./pages/Dashboard";
import { AuthProvider } from "./lib/auth";
import { ProgressProvider } from "./lib/progress";

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/saya" element={<Dashboard />} />
              <Route path="/:topicId" element={<TopicHome />} />
              <Route path="/:topicId/pelajaran/:id" element={<LessonPage />} />
              <Route path="*" element={<Landing />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}
