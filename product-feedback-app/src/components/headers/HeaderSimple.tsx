import Button from '../Button';

import iconBack from '../../assets/shared/icon-arrow-left.svg';

interface HeaderSimpleTypes {
  hasEditButton: boolean;
}

export default function HeaderSimple({ hasEditButton }: HeaderSimpleTypes) {
  return (
    <header className="header simple">
      <Button text="Go Back" style="arrow" url="/" icon={{ src: iconBack, alt: 'Arrow Left Icon' }} />

      {hasEditButton && <Button text="Edit Feedback" style="secondary" url={`edit`} />}
    </header>
  );
}
