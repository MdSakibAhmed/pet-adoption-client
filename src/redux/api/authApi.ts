import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body: body,
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body: body,
      }),
    }),

    getProfile: builder.query({
      query: () => "/profile",
      providesTags: ["profile"],
    }),
    getAllUsers: builder.query({
      query: (arg) => ({
        url: "/all-users",
        params: arg,
      }),
    }),
    updateProfile: builder.mutation({
      query: (arg) => ({
        url: "/profile",
        method: "PATCH",
        body: arg,
      }),
  
    }),

    changePassword: builder.mutation({
      query: (arg) => ({
        url: "/change-password",
        method: "PATCH",
        body: arg,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetAllUsersQuery
} = authApi;
