import {
  nameValidation,
  selectValidation,
  valueValidation,
} from "../../../utils/validations/yupValidations.tsx";
import * as yup from "yup";

export const commonCss = {
    css: {
      divCss:
        "relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12",
      checkboxCss: "w-[16px] h-[16px]",
      labelCss: "",
      inputCss:
        "w-full h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
      errorCss: "absolute top-[64px] text-red-400 text-[11px] leading-tight",
    },
  },
  commonActions = {
    handleClick: null,
    handleKeyUp: null,
    handleKeyDown: null,
    handleOnChange: null,
  };

export const AddItemFormValidation = () => {
  const validationSchema = yup.object({
    item_name: nameValidation,
    item_brand: selectValidation,
    item_category: selectValidation,

    package: selectValidation,
    retail_unit: selectValidation,

    reorder_point: selectValidation,
    reorder_quantity: selectValidation,

    retail_unit_margin: valueValidation,
    wholesale_unit_margin: valueValidation,
    max_storage: valueValidation,
    product_specification: nameValidation,
    product_image: nameValidation,
  });

  return validationSchema;
};

export const nameProps = ({ defaultValue }: any) => ({
  input: "item_name",
  label: "Item Name",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const categoryProps = ({ defaultValue }: any) => ({
  input: "item_category",
  label: "Item Category",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const brandProps = ({ defaultValue }: any) => ({
  input: "item_brand",
  label: "Item Brand",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const packageProps = ({ defaultValue }: any) => ({
  input: "package",
  label: "Package",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const retailUnitProps = ({ defaultValue }: any) => ({
  input: "retail_unit",
  label: "Total Retail Unit",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const reorderPointProps = ({ defaultValue }: any) => ({
  input: "reorder_point",
  label: "Reorder Point",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const reorderQuantityProps = ({ defaultValue }: any) => ({
  input: "reorder_quantity",
  label: "New Reorder Quantity",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const retailMarginProps = ({ defaultValue }: any) => ({
  input: "retail_unit_margin",
  label: "Retail Unit Margin",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const wholesaleMarginProps = ({ defaultValue }: any) => ({
  input: "wholesale_unit_margin",
  label: "Wholesale Unit Margin",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const maxStorageProps = ({ defaultValue }: any) => ({
  input: "max_storage",
  label: "Max Storgae Capacity",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const productSpecificaitonProps = ({ defaultValue }: any) => ({
  input: "product_specification",
  label: "Product Specification",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const productImageProps = ({ defaultValue }: any) => ({
  input: "product_image",
  label: "Product Image",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
