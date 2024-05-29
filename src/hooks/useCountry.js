import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCountry, getCountryByCode } from "../services/apiCountries";
import { COUNTRY_CODE_REGEX } from "../utils/config";
import { formatCountryInfo } from "../utils/helper";

function useCountry() {
  const [countryInfo, setCountryInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { countryName } = useParams();

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        let response;

        if (COUNTRY_CODE_REGEX.test(countryName))
          response = await getCountryByCode(countryName);
        else response = await getCountry(countryName);

        if (response !== undefined) {
          setCountryInfo(formatCountryInfo(response.at(0)));
        } else setError("Failed to fetch country !");

        setIsLoading(false);
      }
      fetchData();
    },
    [countryName],
  );
  return { countryInfo, error, isLoading };
}

export default useCountry;
