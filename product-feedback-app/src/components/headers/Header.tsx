import menuToggle from '../../assets/shared/mobile/icon-hamburger.svg';

interface HeaderTypes {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderTypes) {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <img src={menuToggle} alt="Hamburgen Menu Icon" />
    </header>
  );
}
