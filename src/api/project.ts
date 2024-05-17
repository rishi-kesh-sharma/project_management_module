import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000/";
export interface IProject {
  id: string;
  taskName: string;
  createdBy: string;
  startDate: Date;
  status: "On Progress" | "Not Started" | "Completed" | "Pending";
  dueDate: Date;
  priority: "Low" | "Normal" | "High";
}

export interface IProject {
  id: string;
  projectName: string;
  tasks: [];
}

type WorkspaceResponse = IProject[];

export const projectApi = createApi({
  reducerPath: "project",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Project"],
  endpoints: (build) => ({
    getProjects: build.query<WorkspaceResponse, IProject>({
      query: () => "project",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Project" as const, id })),
              { type: "Project", id: "LIST" },
            ]
          : [{ type: "Project", id: "LIST" }],
    }),
    addProject: build.mutation<IProject, Partial<IProject>>({
      query: (body) => ({
        url: `project`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Project", id: "LIST" }],
    }),
    getProject: build.query<IProject, string | undefined>({
      query: (id) => `project/${id}`,
      providesTags: (result, error, id) => [{ type: "Project", id }],
    }),
    updateProject: build.mutation<
      void,
      Pick<IProject, "id"> & Partial<IProject>
    >({
      query: ({ id, ...patch }) => ({
        url: `workspaces/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          projectApi.util.updateQueryData("getProject", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Project", id }],
    }),
    deleteProject: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Workspace", id }],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useGetProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
