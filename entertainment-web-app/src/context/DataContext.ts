import { createContext } from 'react';
import { type ItemType } from '../types/index';

export interface DataContextType {
  data: ItemType[];
  toggleBookmark: (id: string) => void;
}

export const DataContext = createContext<DataContextType | null>(null);
