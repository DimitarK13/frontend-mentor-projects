import { useData } from '../context/useData';

import FilteredListPage from '../components/FilteredListPage';

export default function Movies() {
  const { data } = useData();

  return (
    <FilteredListPage
      placeholder="Search for movies"
      baseTitle="Movies"
      filterFn={(item) => item.category === 'Movie'}
      searchFn={(item) => item.category === 'Movie'}
      data={data}
      isTrending={false}
    />
  );
}
