import { useState } from 'react';

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });
  const fetchData = async (url, method, bodyData = null) => {
    if (!url) return;
    try {
      const options = {
        method,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData),
      };
      const res = await fetch(url, options);
      const dataRes = await res.json();
      console.log(dataRes);
      setState({
        data: dataRes,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error,
      });
      console.error(error);
    }
  };
  return {
    ...state,
    fetchData,
  };
};
