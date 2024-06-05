import baseApi from "./baseApi";

export const petAdoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdoptionRequest: builder.mutation({
      query: (arg) => ({
        url: "/adoption-request",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["petAdoptionRequest"],
    }),

    getAdoptionRequest: builder.query({
      query: (arg) => ({
        url: "/adoption-request",
        params: arg,
      }),
      providesTags: ["petAdoptionRequest"],
    }),

    updateAdoptionRequest: builder.mutation({
      query: ({ requestId, ...arg }) => ({
        url: `/adoption-request/${requestId}`,
        method: "PATCH",
        body: arg,
      }),
      invalidatesTags: ["petAdoptionRequest"],
    }),
  }),
});

export const {useAddAdoptionRequestMutation,useGetAdoptionRequestQuery,useUpdateAdoptionRequestMutation} = petAdoptionRequestApi