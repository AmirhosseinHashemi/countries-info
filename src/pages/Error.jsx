import { useRouteError } from "react-router-dom";
import BackButton from "../components/BackButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="relative mt-10 flex flex-col items-center justify-center pt-20 text-neutral-gray-1 dark:text-white">
      <BackButton position="absolute top-0 left-4" />
      <h2 className="text-2xl font-bold">Oops !</h2>
      <p className="text-lg font-semibold">Something went wrong 🐞</p>
      <p className="mt-4 rounded bg-red-100 px-4 py-2 text-sm font-medium capitalize text-neutral-gray-1">
        {error?.message || error?.text}
      </p>
    </div>
  );
}

export default Error;
