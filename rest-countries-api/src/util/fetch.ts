export const fetchCountry = async (code: string) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const response = await data.json();

    if (!response) return;

    return response[0];
  } catch (err) {
    return 'An error occured - ' + err;
  }
};

export const fetchCountries = async () => {
  try {
    const data = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3');
    const response = await data.json();

    if (!response) return;

    return response;
  } catch (err) {
    return 'An error occured - ' + err;
  }
};

export const fetchCountriesByRegion = async (region: string) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const response = await data.json();

    if (!response) return;

    return response;
  } catch (err) {
    return 'An error occured - ' + err;
  }
};

export const fetchCountriesByName = async (search: string) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${search}`);
    const response = await data.json();

    if (!response) return;

    return response;
  } catch (err) {
    return 'An error occured - ' + err;
  }
};
