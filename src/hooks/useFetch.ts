import { useState, useCallback } from "react";

interface Config {
  method?: "GET" | "POST" | "DELETE";
  headers?: { "Content-type": string };
  body?: any;
}

const BASE_URL = import.meta.env.VITE_API_URL;

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: Config, loadData: (data: any) => void) => {
      setIsLoading(true);
      setError(null);

      const URL = BASE_URL + "/products";

      try {
        const response = await fetch(URL, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed.");
        }

        const data = await response.json();
        loadData(data);
      } catch (error: unknown) {
        console.log(error);
      }

      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useFetch;
