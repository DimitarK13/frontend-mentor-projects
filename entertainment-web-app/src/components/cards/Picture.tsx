interface PictureTypes {
  isTrending: boolean;
  thumbnail: {
    trending?: {
      large: string;
      small: string;
    };
    regular: {
      large: string;
      medium: string;
      small: string;
    };
  };
  alt: string;
}

export default function Picture({ isTrending, thumbnail, alt }: PictureTypes) {
  return (
    <>
      {isTrending ? (
        <picture>
          <source media="(min-width: 768px)" srcSet={thumbnail.trending!.large} />

          <img className="card-image" src={thumbnail.trending!.small} alt={alt} loading="lazy" />
        </picture>
      ) : (
        <picture>
          <source media="(min-width: 1080px)" srcSet={thumbnail.regular.large} />
          <source media="(min-width: 768px)" srcSet={thumbnail.regular.medium} />

          <img className="card-image" src={thumbnail.regular.small} alt={alt} loading="lazy" />
        </picture>
      )}
    </>
  );
}
