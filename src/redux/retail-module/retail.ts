export type APiType = { isFlag?: boolean; response: any };
export type ServiceType = {
  add: APiType;
  delete: APiType;
  edit: APiType;
  view: APiType;
};
export type ItemFormSchema = {
  item_name: string;
  item_category: string;
  item_brand: string;
  package: string;
  retail_unit: string | number;
  reorder_point: string | number;
  reorder_quantity: string | number;
  retil_unit_margin: string | number;
  wholesale_unit_margin: string | number;
  max_storage: string | number;
  product_specification: string;
  product_image: string;
};

export type RetailApi = {
  inventory: ServiceType;
};

export type InventoryPlatform = {
  add_ItemForm: ItemPlatformSchema;
};

export type ItemPlatformSchema = {
  id?: string | number | null;
  input: ItemFormSchema;
  details: Array<{
    item_name: string;
    item_category: string;
    item_brand: string;
    package: string;
    retail_unit: string | number;
    reorder_point: string | number;
    reorder_quantity: string | number;
    retil_unit_margin: string | number;
    wholesale_unit_margin: string | number;
    max_storage: string | number;
    product_specification: string;
    product_image: string;
  }>;
};

export type RetailSliceSchema = {
  platform: {
    inventory: InventoryPlatform;
  };

  retail: RetailApi;
};
// Variables
export const InitialApiData = {
    isFlag: false,
    response: {
      details: [],
      error: "",
      isLoading: false,
      isSuccess: false,
      toastMsg: "",
    },
  },
  InitialServiceData = {
    add: InitialApiData,
    delete: InitialApiData,
    edit: InitialApiData,
    view: InitialApiData,
  };
