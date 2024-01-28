import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const headers = {
  "X-RapidAPI-Key": import.meta.env.API_KEY_COIN_NEWS_API,
  "X-RapidAPI-Host": import.meta.env.API_HOST_KEY_COIN_NEWS_API,
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
