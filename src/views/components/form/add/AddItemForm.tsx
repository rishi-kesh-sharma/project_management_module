import React from "react";
import { useForm } from "react-hook-form";
import {
  AddItemFormValidation,
  brandProps,
  categoryProps,
  commonActions,
  maxStorageProps,
  nameProps,
  packageProps,
  productImageProps,
  productSpecificaitonProps,
  reorderPointProps,
  reorderQuantityProps,
  retailMarginProps,
  retailUnitProps,
  wholesaleMarginProps,
} from "../formProps.tsx";
import ItemForm from "../ItemForm.tsx";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  item_name: string;
  item_category: string;
  item_brand: string;
  package: string;
  retail_unit: string;
  reorder_point: string;
  reorder_quantity: string | number;
  retail_unit_margin: string | number;
  wholesale_unit_margin: string | number;
  max_stage: string;
  product_specification: string;
  product_image: string;
}

const AddItemForm = () => {
  // OnSubmit handler
  const onSubmit = (data: FormData) => {
    console.log(data, "data");
    // // Ensure item_date is defined and has purchase_date and expiry_date properties
    // // Extract purchase_date and expiry_date from data
    // const {
    //   purchase_date,
    //   expiry_date,
    //   price,
    //   quantity,
    //   supplier_name,
    //   ...restData
    // } = data;
    // // Combine restData with itemDate
    // const updatedData = {
    //   ...restData,
    //   organization_id: 1,
    //   purchase_date: dayjs(purchase_date).format("YYYY-MM-DD"),
    //   expiry_date: dayjs(expiry_date).format("YYYY-MM-DD"),
    //   quantity: quantity,
    //   price: price,
    //   supplier: supplier_name,
    // };
    // dispatch(CreateInventoryThunk(updatedData));
    // // Now, updatedData contains the original data excluding
    reset();
  };
  // validations
  const validationSchema: any = AddItemFormValidation();

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form variables
  const form = {
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    getValues,
  };
  const remaining = { actions: commonActions, form, css: {} };

  // Form Object for add
  const formObj: any = {
    item_name: {
      common: nameProps({}),
      type: "input",
      ...remaining,
    },
    item_category: {
      type: "select",
      options: [
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
      ],
      common: categoryProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },

    item_brand: {
      type: "select",
      options: [
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
      ],
      common: brandProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    // // ...remaining,
    package: {
      type: "select",
      options: [
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
      ],
      common: packageProps({}),
      form: remaining.form,
      css: {
        ...remaining.css,
      },
      actions: { ...remaining.actions },
      // ...remaining,
      // ...remaining,
    },

    retail_unit: {
      type: "select",
      options: [
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
      ],
      common: retailUnitProps({}),

      form: remaining.form,

      css: {
        ...remaining.css,
      },
      actions: { ...remaining.actions },
    },
    reorder_point: {
      type: "select",
      options: [
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
      ],
      common: reorderPointProps({}),
      form: remaining.form,

      css: {
        ...remaining.css,
      },
      actions: { ...remaining.actions },
    },

    reorder_quantity: {
      type: "select",
      options: [
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
        { value: "1", label: "One" },
      ],
      common: reorderQuantityProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    retail_unit_margin: {
      type: "input",
      common: retailMarginProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    wholesale_unit_margin: {
      type: "input",
      common: wholesaleMarginProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    max_storage: {
      type: "input",
      common: maxStorageProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    product_specification: {
      type: "input",
      common: productSpecificaitonProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: {
        divCss:
          " relative h-[200px] pt-1 flex flex-col gap-2 text-[11px] text-dark-100 w-11/12 w-full px-2",
        inputCss:
          "h-[150px] bg-input-100 rounded-md relative h-[5.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center  w-full",
        ...remaining.css,
      },
    },
    product_image: {
      type: "input",
      common: productImageProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
  };
  return (
    <div className="w-full  px-2 pb-8">
      <ItemForm formObj={formObj} form={form} />
    </div>
  );
};

export default AddItemForm;
