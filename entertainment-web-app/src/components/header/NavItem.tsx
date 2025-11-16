import { NavLink } from 'react-router';

interface NavItemTypes {
  url: string;
  imageSrc: string;
}

export default function NavItem({ url, imageSrc }: NavItemTypes) {
  return (
    <NavLink className="header-nav-item" to={url}>
      <img src={imageSrc} alt="icon" />
    </NavLink>
  );
}
