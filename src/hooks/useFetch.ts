import { useState, useCallback } from "react";
import axios from "axios";

interface Config {
  method: "get" | "post" | "delete";
  body?: any;
}

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async (config: Config, loadData: (data: any) => void) => {
      setIsLoading(true);
      setError("");

      try {
        const response = await client[config.method](
          "/products",
          {
            "Content-type": "Application/json",
          },
          config.body
        );

        loadData(response.data);
      } catch (error: unknown) {
        setError("Request failed.");
      }

      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useFetch;
