import { useEffect, useState } from "react";
import { fetchProviderList } from "../services/provider";

const useGetProviderList = () => {
  const [providers, setProviders] = useState<string[]>([]);

  const fetchProviders = async () => {
    try {
      const providersResult = await fetchProviderList();
      setProviders(providersResult.data);
    } catch (error) {
      console.error("Error fetching provider list:", error);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return {
    providers: providers,
  };
};

export default useGetProviderList;
