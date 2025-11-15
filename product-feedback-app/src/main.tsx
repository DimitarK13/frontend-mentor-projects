import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import LayoutA from './layouts/LayoutA.tsx';
import LayoutB from './layouts/LayoutB.tsx';
import LayoutC from './layouts/LayoutC.tsx';
import LayoutD from './layouts/LayoutD.tsx';
import Index from './routes/Index.tsx';
import Roadmap from './routes/Roadmap.tsx';
import Feedback from './routes/Feedback.tsx';
import FeedbackForm from './routes/FeedbackForm.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutA />}>
          <Route index element={<Index />} />
        </Route>

        <Route element={<LayoutB />}>
          <Route path="roadmap" element={<Roadmap />} />
        </Route>

        <Route element={<LayoutC />}>
          <Route path="f/:id" element={<Feedback />} />
        </Route>

        <Route element={<LayoutD />}>
          <Route path="new" element={<FeedbackForm />} />
          <Route path="f/:id/edit" element={<FeedbackForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
