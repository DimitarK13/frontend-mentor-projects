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
