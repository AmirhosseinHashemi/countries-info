import { Form, useLoaderData } from "react-router-dom";

import { getCountries } from "../services/apiCountries";

import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";
import CountryCard from "../components/CountryCard";

function Home() {
  const countries = useLoaderData();

  return (
    <>
      <Form method="POST" className="flex flex-col gap-8 px-4">
        <SearchInput />
        <SelectInput />
      </Form>

      {countries.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </>
  );
}

export async function loader() {
  const data = await getCountries();
  return data;
}

export default Home;
