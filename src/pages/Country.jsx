import BackButton from "../components/BackButton";
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
          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Native Name:
            <span className="ml-1 font-normal text-neutral-gray-2">Iran</span>
          </p>

          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Population:
            <span className="ml-1 font-normal text-neutral-gray-2">
              {formatNumber(8000000)}
            </span>
          </p>

          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Region:
            <span className="ml-1 font-normal text-neutral-gray-2">Asia</span>
          </p>

          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Sub Region:
            <span className="ml-1 font-normal text-neutral-gray-2">--</span>
          </p>

          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Capital:
            <span className="ml-1 font-normal text-neutral-gray-2">Tehran</span>
          </p>
        </div>

        {/* secondary data */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Top Level Domain:
            <span className="ml-1 font-normal normal-case text-neutral-gray-2">
              .ir
            </span>
          </p>

          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Currencies:
            <span className="ml-1 font-normal text-neutral-gray-2">Rial</span>
          </p>

          <p className="text-sm font-semibold capitalize text-neutral-gray-1">
            Languages:
            <span className="ml-1 font-light text-neutral-gray-2">Persian</span>
          </p>
        </div>

        {/* borders */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          <p className="col-span-3 text-base font-semibold capitalize text-neutral-gray-1">
            Border Countries:
          </p>
          <button className="col-span-1 py-1 text-sm font-light capitalize text-neutral-gray-2 shadow active:shadow-sm">
            AFG
          </button>
          <button className="col-span-1 py-1 text-sm font-light capitalize text-neutral-gray-2 shadow active:shadow-sm">
            TURK
          </button>
          <button className="col-span-1 py-1 text-sm font-light capitalize text-neutral-gray-2 shadow active:shadow-sm">
            ARM
          </button>
        </div>
      </div>
    </section>
  );
}

export default Country;
