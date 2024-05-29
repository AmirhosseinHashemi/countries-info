import { useNavigate } from "react-router-dom";

import { useCountries } from "../hooks/useCountries";

import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";
import CountriesList from "../components/CountriesList";
import Spinner from "../components/Spinner";
import CustomError from "../components/CustomError";

function Home() {
  const navigate = useNavigate();
  const { countries, region, setRegion, isLoading } = useCountries();

  if (countries.length === 0)
    return <CustomError message="Failed to fetch countries 🐞" />;

  const handleSearch = function (event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form);
    navigate(`country/${formData.countryName}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={handleSearch}
        method="POST"
        className="flex flex-col gap-8 px-4 sm:flex-row sm:justify-between sm:px-0"
      >
        <SearchInput disabled={isLoading} />
        <SelectInput
          region={region}
          setRegion={setRegion}
          disabled={isLoading}
        />
      </form>

      {isLoading ? <Spinner /> : <CountriesList data={countries} />}
    </div>
  );
}

export default Home;
