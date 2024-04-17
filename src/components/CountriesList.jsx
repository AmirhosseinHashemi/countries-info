import CountryCard from "./CountryCard";

function CountriesList({ data }) {
  return (
    <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:justify-items-center md:grid-cols-3 lg:grid-cols-4">
      {data.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </ul>
  );
}

export default CountriesList;
