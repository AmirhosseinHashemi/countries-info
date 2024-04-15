import CountryCard from "./CountryCard";

function CountriesList({ data }) {
  return (
    <ul className="flex flex-col items-stretch gap-6">
      {data.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </ul>
  );
}

export default CountriesList;
