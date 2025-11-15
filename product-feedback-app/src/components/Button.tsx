interface ButtonTypes {
  text: string;
  icon?: {
    src: string;
    alt: string;
  };
  style: string;
}

export default function Button({ text, icon, style }: ButtonTypes) {
  return (
    <button className={`btn btn--${style}`}>
      {icon && <img {...icon} />}
      {text}
    </button>
  );
}
