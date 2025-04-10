
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Evaluacion from "./pages/Evaluacion";
import Plan from "./pages/Plan";
import Recursos from "./pages/Recursos";
import Gamificacion from "./pages/Gamificacion";
import NotFound from "./pages/NotFound";
import CourseView from "./pages/CourseView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/evaluacion" element={<Evaluacion />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/gamificacion" element={<Gamificacion />} />
          <Route path="/curso/:courseId" element={<CourseView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
