import { Form } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";
import CountryCard from "../components/CountryCard";

function Home() {
  return (
    <>
      <Form method="POST" className="flex flex-col gap-8 px-4">
        <SearchInput />
        <SelectInput />
      </Form>
      <CountryCard />
    </>
  );
}

export default Home;
