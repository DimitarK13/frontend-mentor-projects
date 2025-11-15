import Button from '../Button';

import iconBack from '../../assets/shared/icon-arrow-left.svg';

interface HeaderRoadmapTypes {
  title: string;
}

export default function HeaderRoadmap({ title }: HeaderRoadmapTypes) {
  return (
    <header>
      <div>
        <Button text="Go Back" style="arrow" url="/" icon={{ src: iconBack, alt: 'Arrow Left Icon' }} />
        <h1>{title}</h1>
      </div>

      <Button text="+ Add Feedback" style="primary" url="new" />
    </header>
  );
}
