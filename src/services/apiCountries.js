const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";
const COUNTRY_API = "https://restcountries.com/v3.1/name";

export async function getCountries() {
  try {
    const res = await fetch(ALL_COUNTRIES_API);
    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getCountry(countryName) {
  try {
    const res = await fetch(`${COUNTRY_API}/${countryName}`);
    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
