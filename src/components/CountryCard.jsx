import { formatNumber } from "../utils/helper";

function CountryCard({ country }) {
  const {
    name: { common: commonName },
    flags: { svg, alt },
    population,
    capital,
    region,
  } = country;

  return (
    <li className="m-auto max-w-64 shadow-md active:shadow-sm">
      <img
        src={svg}
        alt={alt}
        className="max-w-full rounded-tl-md rounded-tr-md"
      />

      <div className="rounded-bl-md rounded-br-md bg-white px-6 pb-10 pt-4 capitalize">
        <h2 className="mb-4 text-lg font-bold text-neutral-gray-1">
          {commonName || "--"}
        </h2>

        <p className="text-sm font-semibold text-neutral-gray-1">
          population:
          <span className="text-neutral-gray-2">
            {formatNumber(population) || "--"}
          </span>
        </p>

        <p className="text-sm font-semibold text-neutral-gray-1">
          Region: <span className="text-neutral-gray-2">{region || "--"}</span>
        </p>

        <p className="text-sm font-semibold text-neutral-gray-1">
          Capital:{" "}
          <span className="text-neutral-gray-2">{capital || "--"}</span>
        </p>
      </div>
    </li>
  );
}

export default CountryCard;
