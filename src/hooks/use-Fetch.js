import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [catalogData, setCatalogData] = useState([]);

  const fetchCatalog = useCallback(async () => {
    try {
      //
      const response = await fetch(
        "https://origami-88fba-default-rtdb.firebaseio.com/catalog.json"
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      const catalog = [];
      for (const name in data) {
        catalog.push({
          id: data[name].id,
          imageUrl: data[name].imageUrl,
          title: data[name].title,
          price: data[name].price,
        });
      }
      setCatalogData(catalog);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  return catalogData;
};

export default useFetch;
