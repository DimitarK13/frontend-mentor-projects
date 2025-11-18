import data from '../../data.json';
import FilteredListPage from '../components/FilteredListPage';

export default function Home() {
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
