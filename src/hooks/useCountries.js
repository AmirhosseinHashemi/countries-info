import { useEffect, useState } from "react";
import { getCountries, getCountriesByRegion } from "../services/apiCountries";
import { DEFAULT_REGION } from "../utils/config";
import { useApp } from "../contexts/AppContext";

export function useCountries() {
  const { isLoading, setIsLoading } = useApp();
  const [region, setRegion] = useState(DEFAULT_REGION);
  const [countries, setCountries] = useState([]);

  useEffect(
    function () {
      setIsLoading(true);
      async function fetchData() {
        const data =
          region === DEFAULT_REGION
            ? await getCountries()
            : await getCountriesByRegion(region);

        setCountries(data);
        setIsLoading(false);
      }
      fetchData();
    },
    [region, setIsLoading],
  );

  return { countries, region, setRegion, isLoading };
}
