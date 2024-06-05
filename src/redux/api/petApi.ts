import baseApi from "./baseApi";

export const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPet: builder.mutation({
      query: (arg) => ({
        url: "/pets",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["pet"],
    }),

    getPetList: builder.query({
      query: (arg) => ({
        url: "/pets",
        params: arg,
      }),
      providesTags: ["pet"],
    }),

    getSinglePet: builder.query({
      query: (petId) => ({
        url: `/pets/${petId}`,
      }),
      providesTags: ["pet"],
    }),

    updatePet: builder.mutation({
      query: ({ petId, ...arg }) => ({
        url: `/pets/${petId}`,
        method: "PATCH",
        body: arg,
      }),
      invalidatesTags: ["pet"],
    }),

    deletePet: builder.mutation({
      query: (petId) => ({
        url: `/pets/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pet"],
    }),
  }),
});

// Use the generated hooks

export const {
  useGetPetListQuery,
  useAddPetMutation,
  useUpdatePetMutation,
  useGetSinglePetQuery,
  useDeletePetMutation
} = petApi;
