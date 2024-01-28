import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  'X-RapidAPI-Key': import.meta.env.API_KEY_COIN_API,
  'X-RapidAPI-Host': import.meta.env.API_HOST_KEY_COIN_API,
};

const createRequest = (url: string) => ({ url, headers });

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (limit: string) => createRequest(`/coins?limit=${limit}`),
    }),
    getCoinDetails: builder.query({
      query: (coinId: string) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinDetailsQuery,
} = coinApi;
