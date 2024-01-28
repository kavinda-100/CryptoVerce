import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   url: "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete",
//   params: {
//     query: "<REQUIRED>",
//   },
//   headers: {
//     "X-RapidAPI-Key": "f9fc03e769msh36a5c7f47bf96eep172017jsn1b3b29142e1d",
//     "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
//   },
// };

const headers = {
  "X-RapidAPI-Key": "f9fc03e769msh36a5c7f47bf96eep172017jsn1b3b29142e1d",
  "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
};

const createRequest = (url: string, query: string) => ({
  url,
  headers,
  params: {
    query,
  },
});

export const coinNews = createApi({
  reducerPath: "coinNews",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bloomberg-market-and-financial-news.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (query: string) => createRequest("/market/auto-complete", query),
    }),
  }),
});

export const { useGetNewsQuery } = coinNews;
