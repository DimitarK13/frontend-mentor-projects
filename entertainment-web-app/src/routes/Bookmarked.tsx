import data from '../../data.json';
import FilteredListPage from '../components/FilteredListPage';

export default function Bookmarked() {
  return (
    <FilteredListPage
      placeholder="Search for bookmarked shows"
      baseTitle="Bookmarked Movies"
      filterFn={(item) => item.isBookmarked && item.category === 'Movie'}
      searchFn={(item) => item.isBookmarked}
      data={data}
      isTrending={false}
      extraSections={[
        {
          title: 'Bookmarked TV Series',
          filterFn: (item) => item.isBookmarked && item.category === 'TV Series',
          isTrending: false,
        },
      ]}
    />
  );
}
