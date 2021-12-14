import { Form } from "antd";
import * as React from "react";
import {
  decreaseCurrent,
  increaseCurrent,
  setIsProduct,
  setIsFormat,
} from "../context/step.actions";
import { useDispatch, useSelect } from "../context/step.provider";
import { GavForm } from "./gav-form";
import { ProductForm } from "./product-form";
import { UsersForm } from "./users-form";

export const GostFormContainer = () => {
  const [form] = Form.useForm();
  const { isAutoMode, isProduct, isFormat } = useSelect();
  const dispatch = useDispatch();

  const setActionsStep = () => {
    dispatch(setIsProduct());
    dispatch(decreaseCurrent());
  };

  const setUsersStep = () => {
    dispatch(setIsFormat());
    dispatch(increaseCurrent());
  };

  const resetFormFieldByName = (fieldName) => {
    form.resetFields([fieldName]);
  };

  const handleFormFinish = (formName, info) => {
    if (formName === "gavForm") {
      // TODO
    }

    if (formName === "productForm") {
      return setUsersStep();
    }

    if (formName === "formatForm") {
      return console.log({ ...info });
    }
  };

  return (
    <Form.Provider onFormFinish={handleFormFinish}>
      {isProduct ? (
        isAutoMode ? (
          <ProductForm
            formName="productForm"
            formInstance={form}
            autoModeLabel="Auto Mode"
            productIdLabel="Продукт"
            productIdOptions={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
            ]}
            productVersionsLabel="Версия"
            productVersionsOptions={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
            ]}
            submitLabel="Submit"
            onActionTypeChange={resetFormFieldByName}
          />
        ) : (
          <GavForm
            productArtifactIdLabel="Artifact ID"
            productGroupIdLabel="Group ID"
            productVersionLabel="Version"
            productClassifierLabel="Classifier"
            productTypeLabel="Type"
            submitLabel="Submit"
          />
        )
      ) : isFormat ? (
        <UsersForm
          formName="formatForm"
          formInstance={form}
          userGroupLabel="Group"
          submitLabel="Submit"
          backLabel="Back"
          onBackClick={setActionsStep}
        />
      ) : null}
    </Form.Provider>
  );
};
