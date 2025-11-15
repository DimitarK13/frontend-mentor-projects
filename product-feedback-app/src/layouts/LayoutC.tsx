import { Outlet } from 'react-router';

import HeaderSimple from '../components/headers/HeaderSimple';

export default function LayoutC() {
  return (
    <>
      <HeaderSimple hasEditButton={true} />

      <Outlet />
    </>
  );
}
