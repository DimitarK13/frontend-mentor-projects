import data from '../../data.json';
import FilteredListPage from '../components/FilteredListPage';

export default function Movies() {
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
