import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { TopicHome } from "./pages/TopicHome";
import { LessonPage } from "./pages/LessonPage";
import { Dashboard } from "./pages/Dashboard";
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
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/saya" element={<Dashboard />} />
              <Route path="/:topicId" element={<TopicHome />} />
              <Route path="/:topicId/pelajaran/:id" element={<LessonPage />} />
              <Route path="*" element={<Landing />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        </ActivityProvider>
      </ProgressProvider>
    </AuthProvider>
  );
}
