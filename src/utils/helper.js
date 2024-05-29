export function formatNumber(num) {
  return Intl.NumberFormat().format(num);
}

export function formatCountryInfo(countryInfo) {
  const {
    capital,
    population,
    region,
    subregion,
    borders,
    tld,
    currencies,
    languages,
    name: { common: commonName, nativeName },
    flags: { svg: countryFlag, alt },
  } = countryInfo;

  const formattedData = {
    commonName,
    nativeName: Object.entries(nativeName).at(0).at(1).common,
    currency: Object.entries(currencies).at(0).at(1).name,
    domain: tld.at(0),
    borders,
    subregion,
    region,
    population,
    capital: capital.at(0),
    languages: Object.values(languages).join(", "),
    countryFlag,
    alt,
  };

  return formattedData;
}
