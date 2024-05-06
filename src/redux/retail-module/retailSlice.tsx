import { createSlice } from "@reduxjs/toolkit";
import { InitialServiceData, RetailSliceSchema } from "./retail";

export const initialState: RetailSliceSchema = {
  platform: {
    inventory: {
      add_ItemForm: {
        input: {
          item_name: "",
          item_category: "",
          item_brand: "",
          package: "",
          retail_unit: "",
          reorder_point: "",
          reorder_quantity: "",
          retil_unit_margin: "",
          wholesale_unit_margin: "",
          max_storage: "",
          product_specification: "",
          product_image: "",
        },
        details: [],
      },
    },
  },
  retail: {
    inventory: InitialServiceData,
  },
};

export const RetailSlice = createSlice({
  name: "retail",
  initialState,
  reducers: {
    // Item Reducers
    //  Add
    setAddItemTrue: (state, action) => {
      state.retail.inventory.add.isFlag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { setAddItemTrue } = RetailSlice.actions;
export default RetailSlice.reducer;
