import { Outlet } from 'react-router';

export default function LayoutA() {
  return (
    <>
      <h1>Hello World A</h1>

      <Outlet />
    </>
  );
}
