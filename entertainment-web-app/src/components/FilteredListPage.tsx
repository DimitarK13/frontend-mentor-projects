import { useState } from 'react';

import { type ItemType } from '../types';

import Search from './Search';
import ResultsList from './ResultsList';

interface FilteredListPageProps {
  placeholder: string;
  baseTitle: string;
  filterFn: (item: ItemType) => boolean;
  searchFn: (item: ItemType) => boolean;
  extraSections?: {
    title: string;
    filterFn: (item: ItemType) => boolean;
    isTrending: boolean;
  }[];
  data: ItemType[];
  isTrending: boolean;
}

export default function FilteredListPage({
  placeholder,
  baseTitle,
  filterFn,
  searchFn,
  extraSections = [],
  data,
  isTrending,
}: FilteredListPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const lowerQuery = searchQuery.toLowerCase();
  const filtered = data.filter((item) => searchFn(item) && item.title.toLowerCase().includes(lowerQuery));

  return (
    <>
      <Search placeholder={placeholder} onSearch={setSearchQuery} />

      {searchQuery ? (
        <ResultsList
          title={`Found ${filtered.length} results for '${searchQuery}'`}
          data={filtered}
          isTrending={false}
        />
      ) : (
        <>
          <ResultsList title={baseTitle} data={data.filter(filterFn)} isTrending={isTrending} />

          {extraSections.map((section) => (
            <ResultsList
              key={section.title}
              title={section.title}
              data={data.filter(section.filterFn)}
              isTrending={section.isTrending}
            />
          ))}
        </>
      )}
    </>
  );
}
