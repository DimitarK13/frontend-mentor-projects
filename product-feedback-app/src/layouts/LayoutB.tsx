import { Outlet } from 'react-router';
import HeaderRoadmap from '../components/headers/HeaderRoadmap';

export default function LayoutB() {
  return (
    <>
      <HeaderRoadmap title="Roadmap" />

      <Outlet />
    </>
  );
}
