import {
  ALL_COUNTRIES_FILTERED_DATA,
  COUNTRIES_BY_REGION,
  COUNTRY_API,
  COUNTRY_BY_CODE,
} from "../utils/config";

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
    const res = await fetch(`${COUNTRY_API}${countryName}`);
    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getCountriesByRegion(region) {
  try {
    const res = await fetch(`${COUNTRIES_BY_REGION}${region}`);
    if (!res.ok) throw new Error(res.statusText);

    const data = res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getCountryByCode(code) {
  try {
    const res = await fetch(`${COUNTRY_BY_CODE}${code}`);
    if (!res.ok) throw new Error(res.statusText);

    const data = res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
