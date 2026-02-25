import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import ArticlesPage from "./pages/ArticlesPage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import NewsletterPage from "./pages/NewsletterPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
