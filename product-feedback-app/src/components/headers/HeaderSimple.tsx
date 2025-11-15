import { useParams } from 'react-router';

import Button from '../Button';

import iconBack from '../../assets/shared/icon-arrow-left.svg';

interface HeaderSimpleTypes {
  hasEditButton: boolean;
}

export default function HeaderSimple({ hasEditButton }: HeaderSimpleTypes) {
  const { id } = useParams();

  return (
    <header>
      <Button text="Go Back" style="arrow" url="/" icon={{ src: iconBack, alt: 'Arrow Left Icon' }} />

      {hasEditButton && <Button text="Edit Feedback" style="secondary" url={`f/${id}/edit`} />}
    </header>
  );
}
