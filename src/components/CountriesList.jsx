import CountryCard from "./CountryCard";

function CountriesList({ data }) {
  return (
    <ul>
      {data.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </ul>
  );
}

export default CountriesList;
