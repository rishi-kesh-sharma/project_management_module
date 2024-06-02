import { ILoginProps } from "@/components/page/Login/Login";
import { REAL_API_BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IProject {
  id: string;
  name: string;
  createdBy: string;
  start_date: Date;
  status: "On Progress" | "Not Started" | "Completed" | "Pending";
  due_date: Date;
  priority: "Low" | "Normal" | "High";
}

export interface IUser {
  id?: string;
  name?: string;

  projects: [];
}

export interface ILogin {
  email: string;
  password?: string;
}
type UserResponse = IUser[];

export const UserApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: `${REAL_API_BASE_URL}/accounts` }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<UserResponse, string>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User" as const, id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    addUser: build.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `Users`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    loginUser: build.mutation<IUser, ILogin>({
      query: (body) => ({
        url: `/login/`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    getUser: build.query<IUser, string | undefined>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    updateUser: build.mutation<void, Pick<IUser, "id"> & Partial<IUser>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          UserApi.util.updateQueryData("getUser", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
    deleteUser: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
} = UserApi;
