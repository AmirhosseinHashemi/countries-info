export const DEFAULT_REGION = "all";
export const COUNTRY_CODE_REGEX = /^[A-Z]{2,4}$/;

// API endpoints
export const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";
export const ALL_COUNTRIES_FILTERED_DATA =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";
export const COUNTRY_API = "https://restcountries.com/v3.1/name/";
export const COUNTRIES_BY_REGION = "https://restcountries.com/v3.1/region/";
export const COUNTRY_BY_CODE = "https://restcountries.com/v3.1/alpha/";
