import { Outlet } from 'react-router';

import Header from './components/Header';

import './styles/main.scss';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
