import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../types/Product";

const client = axios.create({ baseURL: "http://localhost/api/products" });

const useFetch = () => {
  const [data, setData] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const response = await client.get("");
      console.log(response.data);
      setData(response.data as Product[]);
      setIsLoading(false);
    };

    getData();
  }, []);

  return { data, isLoading };
};

export default useFetch;
