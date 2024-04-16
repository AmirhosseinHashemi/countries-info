import { Form, redirect } from "react-router-dom";

import { useCountries } from "../hooks/useCountries";

import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";
import CountriesList from "../components/CountriesList";
import Spinner from "../components/Spinner";

function Home() {
  const { countries, region, setRegion, isLoading } = useCountries();
  return (
    <div className="flex flex-col gap-6">
      <Form method="POST" className="flex flex-col gap-8 px-4">
        <SearchInput />
        <SelectInput region={region} setRegion={setRegion} />
      </Form>

      {isLoading ? <Spinner /> : <CountriesList data={countries} />}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const { countryName } = Object.fromEntries(formData);

  return redirect(`country/${countryName}`);
}

export default Home;
