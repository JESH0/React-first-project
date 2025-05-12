import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/5d236a238b0925bf4406c03a/latest/USD`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates))
      .catch((error) => console.error('Error fetching currency data:', error));
  }, [currency]); // ✅ Run once on mount

  return data;
}

export default UseCurrencyInfo;
