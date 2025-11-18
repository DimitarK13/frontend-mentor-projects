import ResultsList from '../components/ResultsList';

import data from '../../data.json';

export default function Home() {
  return (
    <>
      <ResultsList title="Trending" data={data.filter((item) => item.isTrending)} isTrending={true} />
      <ResultsList title="Recommended for you" data={data.filter((item) => !item.isTrending)} isTrending={false} />
    </>
  );
}
