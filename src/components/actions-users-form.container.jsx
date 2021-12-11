import { Form } from "antd";
import * as React from "react";
import { ActionsForm } from "./actions-form";
import { UsersForm } from "./users-form";

export const ActionsUsersFormContainer = ({
  isActions,
  isUsers,
  setActionsStep,
  setUsersStep,
}) => {
  const [form] = Form.useForm();

  const resetFormFieldByName = (fieldName) => {
    form.resetFields([fieldName]);
  };

  const handleFormFinish = (formName, info) => {
    if (formName === "actionsForm") {
      return setUsersStep();
    }

    if (formName === "usersForm") {
      return console.log({ ...info });
    }
  };

  return (
    <Form.Provider onFormFinish={handleFormFinish}>
      {isActions ? (
        <ActionsForm
          formName="actionsForm"
          formInstance={form}
          actionTypeLabel="Type"
          actionTypeOptions={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
          ]}
          actionPayloadLabel="Payload"
          actionPayloadOptions={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
          ]}
          onActionTypeChange={resetFormFieldByName}
        />
      ) : isUsers ? (
        <UsersForm
          formName="usersForm"
          formInstance={form}
          userGroupLabel="Group"
          onBackClick={setActionsStep}
        />
      ) : null}
    </Form.Provider>
  );
};
