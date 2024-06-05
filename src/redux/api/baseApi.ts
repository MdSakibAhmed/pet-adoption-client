import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://pet-adaption-xi.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,

  endpoints: () => ({}),
  tagTypes: ["pet", "petAdoptionRequest", "adoptedPet","profile"],
});

export default baseApi;
