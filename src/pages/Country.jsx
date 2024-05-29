import useCountry from "../hooks/useCountry";
import { formatNumber } from "../utils/helper";

import BackButton from "../components/BackButton";
import BorderButton from "../components/BorderButton";
import DataParagraph from "../components/DataParagraph";
import Spinner from "../components/Spinner";
import CustomError from "../components/CustomError";

function Country() {
  const { countryInfo, error, isLoading } = useCountry();

  if (isLoading) return <Spinner />;
  if (error) return <CustomError message={error} />;
  return (
    <section className="px-4">
      <BackButton />

      {/* country countainer */}
      <div className="sm-gap-x-8 flex flex-col gap-12 sm:my-14 sm:grid sm:grid-cols-2 sm:gap-y-6 md:gap-x-14">
        <img
          src={countryInfo?.countryFlag}
          alt={countryInfo?.alt}
          className="mt-14 border dark:border-none sm:mt-0"
        />

        <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 sm:self-center">
          <h2 className="col-span-2 text-3xl font-extrabold text-neutral-gray-1 dark:text-white">
            {countryInfo?.commonName}
          </h2>
          {/* main data */}
          <div className="flex flex-col gap-2">
            <DataParagraph
              dataType="Native Name"
              value={countryInfo?.nativeName}
            />
            <DataParagraph
              dataType="population"
              value={formatNumber(countryInfo?.population)}
            />
            <DataParagraph dataType="region" value={countryInfo?.region} />
            <DataParagraph
              dataType="sub region"
              value={countryInfo?.subregion}
            />
            <DataParagraph dataType="capital" value={countryInfo?.capital} />
          </div>

          {/* secondary data */}
          <div className="flex flex-col gap-2">
            <DataParagraph
              dataType="top level domain"
              value={countryInfo?.domain}
            />
            <DataParagraph
              dataType="currencies"
              value={countryInfo?.currency}
            />
            <DataParagraph dataType="language" value={countryInfo?.languages} />
          </div>

          {/* borders */}
          <div className="mb-2 grid grid-cols-3 gap-x-2 gap-y-4 sm:col-span-2 sm:mt-6 sm:grid-cols-4 lg:col-span-1">
            <p className="col-span-3 text-base font-semibold capitalize text-neutral-gray-1 dark:text-neutral-gray-3 sm:col-span-4">
              Border Countries:
            </p>
            {countryInfo?.borders ? (
              countryInfo?.borders.map((item) => (
                <BorderButton key={item}>{item}</BorderButton>
              ))
            ) : (
              <p className="col-span-3 text-sm font-semibold text-neutral-gray-2">
                There are no borders
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// export async function loader({ params }) {
//   const countryName = params.countryName;
//   let countryData;

//   if (COUNTRY_CODE_REGEX.test(countryName))
//     countryData = await getCountryByCode(countryName);
//   else countryData = await getCountry(countryName);

//   if (!countryData) throw new Error(`${countryName} Not Found 404`);
//   else return countryData;
// }

export default Country;
