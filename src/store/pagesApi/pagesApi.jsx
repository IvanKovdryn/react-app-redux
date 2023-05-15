import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pagesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({}),
});
export const {} = pagesApi;
