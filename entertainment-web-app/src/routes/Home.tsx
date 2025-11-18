import { useData } from '../context/useData';

import FilteredListPage from '../components/FilteredListPage';

export default function Home() {
  const { data } = useData();

  return (
    <FilteredListPage
      placeholder="Search for movies or TV series"
      baseTitle="Trending"
      filterFn={(item) => item.isTrending}
      searchFn={(item) => (item ? true : false)}
      data={data}
      isTrending={true}
      extraSections={[
        {
          title: 'Recommended for you',
          filterFn: (item) => !item.isTrending,
          isTrending: false,
        },
      ]}
    />
  );
}
