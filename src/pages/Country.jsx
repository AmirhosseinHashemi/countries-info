import BackButton from "../components/BackButton";
import BorderButton from "../components/BorderButton";
import DataParagraph from "../components/DataParagraph";
import { formatNumber } from "../utils/helper";

function Country() {
  return (
    <section className="px-4">
      <BackButton />

      {/* country countainer */}
      <div className="flex flex-col gap-12">
        <img src="/ir.svg" alt="ir" className="mt-14" />
        {/* main data */}
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-3xl font-extrabold text-neutral-gray-1">
            Iran
          </h2>
          <DataParagraph dataType="Native Name" value="Iran" />
          <DataParagraph dataType="population" value={formatNumber(8000000)} />
          <DataParagraph dataType="region" value="asia" />
          <DataParagraph dataType="sub region" value="asia" />
          <DataParagraph dataType="capital" value="tehran" />
        </div>

        {/* secondary data */}
        <div className="flex flex-col gap-2">
          <DataParagraph dataType="top level domain" value=".ir" />
          <DataParagraph dataType="currencies" value="rial" />
          <DataParagraph dataType="language" value="persian" />
        </div>

        {/* borders */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          <p className="col-span-3 text-base font-semibold capitalize text-neutral-gray-1">
            Border Countries:
          </p>
          <BorderButton>Afghanestan</BorderButton>
          <BorderButton>Armanestan</BorderButton>
          <BorderButton>Iraq</BorderButton>
          <BorderButton>Turkey</BorderButton>
          <BorderButton>Azerbaijan</BorderButton>
        </div>
      </div>
    </section>
  );
}

export default Country;
