import { useEffect, useState } from "react";
import { getCountries, getCountriesByRegion } from "../services/apiCountries";

const DEFAULT_REGION = "all";

export function useCountries() {
  const [region, setRegion] = useState(DEFAULT_REGION);
  const [countries, setCountries] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const data =
          region === DEFAULT_REGION
            ? await getCountries()
            : await getCountriesByRegion(region);

        setCountries(data);
      }
      fetchData();
    },
    [region],
  );

  return { countries, region, setRegion };
}
