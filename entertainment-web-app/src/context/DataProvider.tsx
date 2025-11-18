import { useState, type ReactNode } from 'react';
import { DataContext } from './DataContext';

import initialData from '../../data.json';

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(initialData);

  function toggleBookmark(title: string) {
    setData((prev) =>
      prev.map((movie) => (movie.title === title ? { ...movie, isBookmarked: !movie.isBookmarked } : movie))
    );
  }

  return <DataContext.Provider value={{ data, toggleBookmark }}>{children}</DataContext.Provider>;
}
