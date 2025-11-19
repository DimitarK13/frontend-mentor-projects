import { NavLink } from 'react-router';

interface NavItemTypes {
  url: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function NavItem({ url, image }: NavItemTypes) {
  return (
    <NavLink className="header-nav-item" to={url}>
      <img src={image.src} alt={`${image.alt} Icon`} />
      <p className="sr-only">{image.alt}</p>
    </NavLink>
  );
}
