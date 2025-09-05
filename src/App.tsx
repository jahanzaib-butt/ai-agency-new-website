import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Workflows from "./pages/Workflows";
import Contact from "./pages/Contact";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import CaseStudies from "./pages/CaseStudies";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://miixedrealities.app.n8n.cloud/webhook/d5d8d6d0-c197-406c-b635-05f95b9182a8/chat'
    });

    // Apply custom styling after chat widget loads
    const applyCustomStyling = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Force apply beautiful styling to n8n chat widget */
        [data-n8n-chat-widget] *,
        .n8n-chat *,
        .chat-widget *,
        .chatbot *,
        iframe[src*="n8n"] *,
        div[class*="n8n"] *,
        div[class*="chat"] *,
        div[id*="n8n"] *,
        div[id*="chat"] * {
          font-family: 'Inter', 'Geist', sans-serif !important;
        }

        /* Chat container styling */
        [data-n8n-chat-widget],
        .n8n-chat,
        .chat-widget,
        .chatbot,
        iframe[src*="n8n"] {
          border-radius: 20px !important;
          overflow: hidden !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
        }

        /* Chat window background */
        [data-n8n-chat-widget] .chat-window,
        .n8n-chat .chat-window,
        .chat-widget .chat-window,
        .chatbot .chat-window,
        [data-n8n-chat-widget] .chat-panel,
        .n8n-chat .chat-panel,
        .chat-widget .chat-panel,
        .chatbot .chat-panel {
          background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(25, 25, 35, 0.95) 100%) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(59, 130, 246, 0.3) !important;
          border-radius: 20px !important;
        }

        /* Chat header */
        [data-n8n-chat-widget] .chat-header,
        .n8n-chat .chat-header,
        .chat-widget .chat-header,
        .chatbot .chat-header,
        [data-n8n-chat-widget] .header,
        .n8n-chat .header,
        .chat-widget .header,
        .chatbot .header {
          background: linear-gradient(135deg, #3B82F6 0%, #A855F7 100%) !important;
          color: white !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        /* Messages area */
        [data-n8n-chat-widget] .messages,
        .n8n-chat .messages,
        .chat-widget .messages,
        .chatbot .messages,
        [data-n8n-chat-widget] .chat-messages,
        .n8n-chat .chat-messages,
        .chat-widget .chat-messages,
        .chatbot .chat-messages {
          background: transparent !important;
        }

        /* User messages */
        [data-n8n-chat-widget] .message.user,
        .n8n-chat .message.user,
        .chat-widget .message.user,
        .chatbot .message.user,
        [data-n8n-chat-widget] .message[data-sender="user"],
        .n8n-chat .message[data-sender="user"],
        .chat-widget .message[data-sender="user"],
        .chatbot .message[data-sender="user"] {
          background: linear-gradient(135deg, #3B82F6 0%, #A855F7 100%) !important;
          color: white !important;
          border-radius: 18px 18px 4px 18px !important;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3) !important;
        }

        /* Bot messages */
        [data-n8n-chat-widget] .message.bot,
        .n8n-chat .message.bot,
        .chat-widget .message.bot,
        .chatbot .message.bot,
        [data-n8n-chat-widget] .message:not([data-sender="user"]),
        .n8n-chat .message:not([data-sender="user"]),
        .chat-widget .message:not([data-sender="user"]),
        .chatbot .message:not([data-sender="user"]) {
          background: rgba(255, 255, 255, 0.05) !important;
          color: #E5E7EB !important;
          border: 1px solid rgba(59, 130, 246, 0.2) !important;
          border-radius: 18px 18px 18px 4px !important;
          backdrop-filter: blur(10px) !important;
        }

        /* Input area */
        [data-n8n-chat-widget] .input-container,
        .n8n-chat .input-container,
        .chat-widget .input-container,
        .chatbot .input-container,
        [data-n8n-chat-widget] .chat-input-container,
        .n8n-chat .chat-input-container,
        .chat-widget .chat-input-container,
        .chatbot .chat-input-container {
          background: rgba(255, 255, 255, 0.05) !important;
          border-top: 1px solid rgba(59, 130, 246, 0.2) !important;
          backdrop-filter: blur(10px) !important;
        }

        /* Input field */
        [data-n8n-chat-widget] .input,
        .n8n-chat .input,
        .chat-widget .input,
        .chatbot .input,
        [data-n8n-chat-widget] .chat-input,
        .n8n-chat .chat-input,
        .chat-widget .chat-input,
        .chatbot .chat-input,
        [data-n8n-chat-widget] input[type="text"],
        .n8n-chat input[type="text"],
        .chat-widget input[type="text"],
        .chatbot input[type="text"] {
          background: rgba(255, 255, 255, 0.9) !important;
          border: 1px solid rgba(59, 130, 246, 0.3) !important;
          border-radius: 12px !important;
          color: #1a1a1a !important;
        }

        /* Send button */
        [data-n8n-chat-widget] .send-button,
        .n8n-chat .send-button,
        .chat-widget .send-button,
        .chatbot .send-button,
        [data-n8n-chat-widget] .send,
        .n8n-chat .send,
        .chat-widget .send,
        .chatbot .send,
        [data-n8n-chat-widget] button[type="submit"],
        .n8n-chat button[type="submit"],
        .chat-widget button[type="submit"],
        .chatbot button[type="submit"] {
          background: linear-gradient(135deg, #3B82F6 0%, #A855F7 100%) !important;
          border: none !important;
          border-radius: 8px !important;
          color: white !important;
        }

        /* Toggle button */
        [data-n8n-chat-widget] .chat-toggle,
        .n8n-chat .chat-toggle,
        .chat-widget .chat-toggle,
        .chatbot .chat-toggle,
        [data-n8n-chat-widget] .toggle-button,
        .n8n-chat .toggle-button,
        .chat-widget .toggle-button,
        .chatbot .toggle-button {
          background: linear-gradient(135deg, #3B82F6 0%, #A855F7 50%, #3B82F6 100%) !important;
          border: none !important;
          border-radius: 50% !important;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4) !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Apply styling immediately and also after a delay to catch dynamically loaded elements
    applyCustomStyling();
    setTimeout(applyCustomStyling, 1000);
    setTimeout(applyCustomStyling, 3000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/workflows" element={<Workflows />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-study/:industry" element={<CaseStudyDetail />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;