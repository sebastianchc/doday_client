import { useState, useCallback } from "react";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  interface RequestConfig {
    fn: any;
    body: any;
  }

  const sendRequest = useCallback(async (requestConfig: RequestConfig) => {
    setIsLoading(true);
    setError(null);

    console.log(requestConfig);

    try {
      const response = await requestConfig.fn(requestConfig.body);
      setIsLoading(false);
      return response;
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useApi;
