import { useData } from '../context/useData';

import FilteredListPage from '../components/FilteredListPage';

export default function Series() {
  const { data } = useData();

  return (
    <FilteredListPage
      placeholder="Search for TV series"
      baseTitle="TV Series"
      filterFn={(item) => item.category === 'TV Series'}
      searchFn={(item) => item.category === 'TV Series'}
      data={data}
      isTrending={false}
    />
  );
}
