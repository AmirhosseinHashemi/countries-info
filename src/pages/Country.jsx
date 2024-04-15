import { useLoaderData } from "react-router-dom";

import { getCountry, getCountryByCode } from "../services/apiCountries";
import { formatNumber } from "../utils/helper";

import BackButton from "../components/BackButton";
import BorderButton from "../components/BorderButton";
import DataParagraph from "../components/DataParagraph";

const COUNTRY_CODE_REGEX = /^[A-Z]{2,4}$/;

function Country() {
  const [
    {
      capital,
      population,
      region,
      subregion,
      borders,
      tld,
      currencies,
      languages,
      name: { common: commonName, nativeName },
      flags: { svg: countryFlag, alt },
    },
  ] = useLoaderData();

  const formattedData = {
    commonName,
    nativeName: Object.entries(nativeName).at(0).at(1).common,
    currency: Object.entries(currencies).at(0).at(1).name,
    domain: tld.at(0),
    borders,
    subregion,
    region,
    population,
    capital: capital.at(0),
    languages: Object.entries(languages).at(0).at(1),
  };

  return (
    <section className="px-4">
      <BackButton />

      {/* country countainer */}
      <div className="flex flex-col gap-12">
        <img src={countryFlag} alt={alt} className="mt-14" />
        {/* main data */}
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-3xl font-extrabold text-neutral-gray-1">
            {formattedData.commonName}
          </h2>
          <DataParagraph
            dataType="Native Name"
            value={formattedData.nativeName}
          />
          <DataParagraph
            dataType="population"
            value={formatNumber(formattedData.population)}
          />
          <DataParagraph dataType="region" value={formattedData.region} />
          <DataParagraph
            dataType="sub region"
            value={formattedData.subregion}
          />
          <DataParagraph dataType="capital" value={formattedData.capital} />
        </div>

        {/* secondary data */}
        <div className="flex flex-col gap-2">
          <DataParagraph
            dataType="top level domain"
            value={formattedData.domain}
          />
          <DataParagraph dataType="currencies" value={formattedData.currency} />
          <DataParagraph dataType="language" value={formattedData.languages} />
        </div>

        {/* borders */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          <p className="col-span-3 text-base font-semibold capitalize text-neutral-gray-1">
            Border Countries:
          </p>
          {formattedData.borders ? (
            formattedData.borders.map((item) => (
              <BorderButton key={item}>{item}</BorderButton>
            ))
          ) : (
            <p className="col-span-3 text-sm font-semibold text-neutral-gray-2">
              There are no borders
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const countryName = params.countryName;
  let countryData;

  if (COUNTRY_CODE_REGEX.test(countryName))
    countryData = await getCountryByCode(countryName);
  else countryData = await getCountry(countryName);

  if (!countryData) throw new Error(`${countryName} Not Found 404`);
  else return countryData;
}

export default Country;
