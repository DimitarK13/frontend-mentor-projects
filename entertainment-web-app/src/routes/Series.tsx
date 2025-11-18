import data from '../../data.json';
import FilteredListPage from '../components/FilteredListPage';

export default function Series() {
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
