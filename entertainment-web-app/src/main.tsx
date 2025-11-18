import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { DataProvider } from './context/DataProvider.tsx';

import App from './App.tsx';
import Home from './routes/Home.tsx';
import Movies from './routes/Movies.tsx';
import Series from './routes/Series.tsx';
import Bookmarked from './routes/Bookmarked.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="bookmarked" element={<Bookmarked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>
);
