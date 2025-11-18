import { useState } from 'react';

import ResultsList from '../components/ResultsList';

import data from '../../data.json';
import Search from '../components/Search';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  return (
    <>
      <Search placeholder="Search for movies or TV series" onSearch={handleSearch} />

      {searchQuery && (
        <ResultsList
          title={`Found ${
            data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())).length
          } results for  '${searchQuery}'`}
          data={data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))}
          isTrending={false}
        />
      )}

      {!searchQuery && (
        <>
          <ResultsList title="Trending" data={data.filter((item) => item.isTrending)} isTrending={true} />
          <ResultsList title="Recommended for you" data={data.filter((item) => !item.isTrending)} isTrending={false} />
        </>
      )}
    </>
  );
}
