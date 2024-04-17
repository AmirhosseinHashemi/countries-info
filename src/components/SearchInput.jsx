function SearchInput({ disabled }) {
  return (
    <label htmlFor="searchInput" className="relative sm:basis-1/3">
      <input
        name="countryName"
        id="searchInput"
        className="inset-0 w-full rounded-md py-4 pl-16 pr-6 text-sm font-normal text-neutral-gray-2 shadow-sm focus:shadow-none focus:outline focus:outline-1 focus:outline-neutral-gray-2"
        type="search"
        placeholder="Search for a country..."
        disabled={disabled}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#858585"
        className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </label>
  );
}

export default SearchInput;
