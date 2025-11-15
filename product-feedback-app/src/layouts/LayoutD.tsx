import { Outlet } from 'react-router';

import HeaderSimple from '../components/headers/HeaderSimple';

export default function LayoutD() {
  return (
    <>
      <HeaderSimple hasEditButton={false} />

      <Outlet />
    </>
  );
}
