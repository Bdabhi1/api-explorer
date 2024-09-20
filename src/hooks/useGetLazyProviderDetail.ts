import { useCallback, useState } from "react";
import { fetchProviderDetail } from "../services/provider";

function useGetLazyProviderDetail() {
  const [loading, setLoading] = useState<boolean>(false);
  
  const getProviderDetail = useCallback(async (provider: string) => {
    setLoading(true);
    const providersDetail = await fetchProviderDetail(provider);
    setLoading(false);
    return providersDetail;
  }, []);

  return {
    loading,
    getProviderDetail,
  };
}

export default useGetLazyProviderDetail;
