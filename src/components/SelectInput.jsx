function SelectInput() {
  return (
    <label htmlFor="filterByRegion" className="relative">
      <select
        name="region"
        id="filterByRegion"
        className="rounded-md py-4 pl-8 pr-20 text-sm font-medium text-neutral-gray-1 shadow-sm focus:shadow-none focus:outline focus:outline-1 focus:outline-neutral-gray-2"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-y-1/2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </label>
  );
}

export default SelectInput;