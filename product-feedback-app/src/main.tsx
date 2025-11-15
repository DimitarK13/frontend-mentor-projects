import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import Index from './routes/Index.tsx';
import Roadmap from './routes/Roadmap.tsx';
import Feedback from './routes/Feedback.tsx';
import FeedbackForm from './routes/FeedbackForm.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="new" element={<FeedbackForm />} />
        <Route path="f/:id" element={<Feedback />} />
        <Route path="f/:id/edit" element={<FeedbackForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
