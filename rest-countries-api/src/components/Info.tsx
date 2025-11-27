interface InfoTypes {
  description: string;
  value: string | string[] | undefined;
}

export default function Info({ description, value }: InfoTypes) {
  const displayValue = () => {
    if (!value) return 'N/A';
    if (Array.isArray(value)) return value.join(', ');
    return value;
  };

  return (
    <p>
      {description}: <span>{displayValue()}</span>
    </p>
  );
}
