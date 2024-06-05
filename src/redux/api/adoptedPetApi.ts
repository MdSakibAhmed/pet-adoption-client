import baseApi from "./baseApi";

export const adoptedPetApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdoptedPet: builder.mutation({
      query: (arg) => ({
        url: "/adoptedPets",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["adoptedPet"],
    }),

    getAdoptedPets: builder.query({
      query: (arg) => ({
        url: "/adoptedPets",
        params: arg,
      }),
      providesTags: ["adoptedPet"],
    }),
  }),
});

export const { useCreateAdoptedPetMutation, useGetAdoptedPetsQuery } =
  adoptedPetApi;
