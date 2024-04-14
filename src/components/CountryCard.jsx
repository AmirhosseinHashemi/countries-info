import { formatNumber } from "../utils/helper";

function CountryCard() {
  return (
    <div className="m-auto mt-6 max-w-64 shadow-md">
      <img
        src="/ir.svg"
        alt="flag"
        className="max-w-full rounded-tl-md rounded-tr-md"
      />

      <div className="rounded-bl-md rounded-br-md bg-white px-6 pb-10 pt-4 capitalize">
        <h2 className="mb-4 text-lg font-bold text-neutral-gray-1">iran</h2>

        <p className="text-sm font-semibold text-neutral-gray-1">
          population:{" "}
          <span className="text-neutral-gray-2">{formatNumber(80000000)}</span>
        </p>

        <p className="text-sm font-semibold text-neutral-gray-1">
          Region: <span className="text-neutral-gray-2">Asia</span>
        </p>

        <p className="text-sm font-semibold text-neutral-gray-1">
          Capital: <span className="text-neutral-gray-2">Tehran</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
