import BackButton from "./BackButton";

function CustomError({ message }) {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center pt-4 text-neutral-gray-1 dark:text-white">
      <BackButton position={"absolute -top-10 left-0"} />
      <h2 className="text-2xl font-bold">Oops !</h2>
      <p className="text-lg font-semibold">Something went wrong !</p>

      <p className="mt-4 rounded bg-red-100 px-4 py-2 text-sm font-medium capitalize text-neutral-gray-1">
        {message}
      </p>
    </div>
  );
}

export default CustomError;
