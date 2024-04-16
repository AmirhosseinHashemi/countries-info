import { useNavigate } from "react-router-dom";
import { formatNumber } from "../utils/helper";
import DataParagraph from "./DataParagraph";

function CountryCard({ country }) {
  const navigate = useNavigate();
  const {
    name: { common: commonName },
    flags: { svg, alt },
    population,
    capital,
    region,
  } = country;

  function handleClick() {
    navigate(`country/${commonName.toLowerCase()}`);
  }

  return (
    <li
      onClick={handleClick}
      className="m-auto w-60 cursor-pointer rounded-md shadow-md active:shadow-sm"
    >
      <img
        src={svg}
        alt={alt}
        className="max-w-full rounded-tl-md rounded-tr-md"
      />

      <div className="rounded-bl-md rounded-br-md border-t bg-white px-6 pb-10 pt-4 capitalize">
        <h2 className="mb-4 text-lg font-bold text-neutral-gray-1">
          <button>{commonName || "--"}</button>
        </h2>
        <DataParagraph dataType="Population" value={formatNumber(population)} />
        <DataParagraph dataType="Region" value={region} />
        <DataParagraph dataType="Capital" value={capital} />
      </div>
    </li>
  );
}

export default CountryCard;
