import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'f9fc03e769msh36a5c7f47bf96eep172017jsn1b3b29142e1d',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };

const headers = {
  'X-RapidAPI-Key': 'f9fc03e769msh36a5c7f47bf96eep172017jsn1b3b29142e1d',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
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
