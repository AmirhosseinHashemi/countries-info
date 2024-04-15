import { Form, redirect, useActionData } from "react-router-dom";

import { useCountries } from "../hooks/useCountries";
import { getCountry } from "../services/apiCountries";

import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";
import CountryCard from "../components/CountryCard";
import CustomError from "../components/CustomError";

function Home() {
  const searchedCountry = useActionData();
  const { countries, region, setRegion } = useCountries();

  if (searchedCountry?.error)
    return (
      <CustomError
        message={`${searchedCountry.countryName} ${searchedCountry.error}`}
      />
    );

  return (
    <>
      <Form method="POST" className="flex flex-col gap-8 px-4">
        <SearchInput />
        <SelectInput region={region} setRegion={setRegion} />
      </Form>

      {searchedCountry ? (
        <CountryCard country={searchedCountry.at(0)} />
      ) : (
        countries.map((country) => (
          <CountryCard country={country} key={country.name.common} />
        ))
      )}
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const { countryName } = Object.fromEntries(formData);

  return redirect(`country/${countryName}`);

  // const countryData = await getCountry(countryName);
  // return countryData || { error: "Not Found 404", countryName };
}

export default Home;
