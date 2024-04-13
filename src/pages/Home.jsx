import { Form } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";

function Home() {
  return (
    <>
      <Form method="POST" className="flex flex-col gap-8 px-4">
        <SearchInput />
        <SelectInput />
      </Form>
      <h2 className="mt-10">Home Page</h2>
    </>
  );
}

export default Home;
