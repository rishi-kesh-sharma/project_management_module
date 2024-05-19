import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000/";

export interface IEquipments {
  id: string;
  itemName: string;
  category: string;
  subCategory: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

type EquipmentsResponse = IEquipments[];

export const equipmentsApi = createApi({
  reducerPath: "equipments",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Equipments"],
  endpoints: (build) => ({
    getEquipments: build.query<EquipmentsResponse, IEquipments>({
      query: () => "equipments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Equipments" as const, id })),
              { type: "Equipments", id: "LIST" },
            ]
          : [{ type: "Equipments", id: "LIST" }],
    }),
    addEquipments: build.mutation<IEquipments, Partial<IEquipments>>({
      query: (body) => ({
        url: `equipments`,
        method: "Equipments",
        body,
      }),
      invalidatesTags: [{ type: "Equipments", id: "LIST" }],
    }),
    getEquipment: build.query<IEquipments, string>({
      query: (id) => `equipments/${id}`,
      providesTags: (result, error, id) => [{ type: "Equipments", id }],
    }),
    updateEquipments: build.mutation<
      void,
      Pick<IEquipments, "id"> & Partial<IEquipments>
    >({
      query: ({ id, ...patch }) => ({
        url: `equipments/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          equipmentsApi.util.updateQueryData("getEquipments", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Equipments", id }],
    }),
    deleteEquipments: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `equipments/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Equipments", id }],
    }),
  }),
});

export const {
  useGetEquipmentQuery,
  useGetEquipmentsQuery,
  useAddEquipmentsMutation,
  useUpdateEquipmentsMutation,
  useDeleteEquipmentsMutation,
} = equipmentsApi;
