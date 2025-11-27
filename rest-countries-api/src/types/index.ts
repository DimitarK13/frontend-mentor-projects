export interface Country {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
  code: string;
}

export interface CountryFull {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld?: string[];
  cca3: string;
  currencies: {
    [key: string]: {
      symbol: string;
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders?: string[];
}
