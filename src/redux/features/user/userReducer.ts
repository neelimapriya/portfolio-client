import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux, TUser } from "@/types/global";

type TLoginPayload = {
  email: string;
  password: string;
};

type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};

type TRefreshTokenResponse = {
  accessToken: string;
};

const authApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // Login Mutation
    loginUser: builder.mutation<TLoginResponse, TLoginPayload>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: TResponseRedux<TLoginResponse>) => {
        if (!response?.data) {
          throw new Error("Invalid login response");
        }
        return response.data;
      },
    }),

    // Refresh Token Mutation
    refreshToken: builder.mutation<TRefreshTokenResponse, void>({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
      transformResponse: (response: TResponseRedux<TLoginResponse>) => {
        if (!response?.data) {
          throw new Error("Invalid login response");
        }
        return response.data;
      },
    }),
  }),
});

export const { useLoginUserMutation, useRefreshTokenMutation } = authApi;
