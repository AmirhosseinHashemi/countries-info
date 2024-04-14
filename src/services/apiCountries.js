const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";
const ALL_COUNTRIES_FILTERED_DATA =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";
const COUNTRY_API = "https://restcountries.com/v3.1/name"; // + /countryName
const COUNTRIES_BY_REGION = "https://restcountries.com/v3.1/region"; // + /specificRegion

export async function getCountries() {
  try {
    const res = await fetch(ALL_COUNTRIES_FILTERED_DATA);
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

export async function getCountriesByRegion(region) {
  try {
    const res = await fetch(`${COUNTRIES_BY_REGION}/${region}`);
    if (!res.ok) throw new Error(res.statusText);

    const data = res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
