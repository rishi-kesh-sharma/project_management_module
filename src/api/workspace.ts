import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000/";
export interface IProject {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: Date;
  status: "On Progress" | "Not Started" | "Completed" | "Pending";
  dueDate: Date;
  priority: "Low" | "Normal" | "High";
}

export interface IWorkspace {
  id: string;
  workspaceName: string;
  projects: [];
}

type WorkspaceResponse = IWorkspace[];

export const workspaceApi = createApi({
  reducerPath: "workspace",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Workspace"],
  endpoints: (build) => ({
    getWorkspaces: build.query<WorkspaceResponse, IWorkspace>({
      query: () => "workspaces",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Workspace" as const, id })),
              { type: "Workspace", id: "LIST" },
            ]
          : [{ type: "Workspace", id: "LIST" }],
    }),
    addWorkspace: build.mutation<IWorkspace, Partial<IWorkspace>>({
      query: (body) => ({
        url: `workspaces`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Workspace", id: "LIST" }],
    }),
    getWorkspace: build.query<IWorkspace, string | undefined>({
      query: (id) => `workspaces/${id}`,
      providesTags: (result, error, id) => [{ type: "Workspace", id }],
    }),
    updateWorkspace: build.mutation<
      void,
      Pick<IWorkspace, "id"> & Partial<IWorkspace>
    >({
      query: ({ id, ...patch }) => ({
        url: `workspaces/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          workspaceApi.util.updateQueryData("getWorkspace", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Workspace", id }],
    }),
    deleteWorkspace: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `workspaces/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Workspace", id }],
    }),
  }),
});

export const {
  useGetWorkspaceQuery,
  useGetWorkspacesQuery,
  useAddWorkspaceMutation,
  useUpdateWorkspaceMutation,
  useDeleteWorkspaceMutation,
} = workspaceApi;
