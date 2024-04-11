import { useRouteError } from "react-router-dom";

function Error() {
  const { error } = useRouteError();

  return (
    <div className="mt-10 flex flex-col items-center justify-center text-neutral-gray-1">
      <h2 className="text-2xl font-bold">Oops !</h2>
      <p className="text-lg font-semibold">Something went wrong 🐞</p>
      <p className="mt-4 text-base font-medium text-neutral-gray-2">
        {error.message || error.text}
      </p>
    </div>
  );
}

export default Error;
