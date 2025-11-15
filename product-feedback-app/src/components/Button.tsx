import { useNavigate } from 'react-router';

type BtnStyle = 'primary' | 'secondary' | 'neutral' | 'action' | 'arrow' | 'arrow-neutral';

interface ButtonTypes {
  text: string;
  icon?: {
    src: string;
    alt: string;
  };
  style: BtnStyle;
  url?: string;
}

export default function Button({ text, icon, style, url }: ButtonTypes) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (url) navigate(url);
  };

  return (
    <button className={`btn btn--${style}`} onClick={handleClick}>
      {icon && <img {...icon} />}
      {text}
    </button>
  );
}
