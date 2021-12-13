import { Form } from "antd";
import * as React from "react";
import {
  decreaseCurrent,
  increaseCurrent,
  setIsAction,
  setIsUser,
} from "../context/actions-users.actions";
import {
  useActionsUsersDispatch,
  useActionsUsersState,
} from "../context/actions-users.context";
import { ActionsForm } from "./actions-form";
import { UsersForm } from "./users-form";

export const ActionsUsersFormContainer = () => {
  const [form] = Form.useForm();
  const { isAction, isUser } = useActionsUsersState();
  const dispatch = useActionsUsersDispatch();

  const setActionsStep = () => {
    dispatch(setIsAction());
    dispatch(decreaseCurrent());
  };

  const setUsersStep = () => {
    dispatch(setIsUser());
    dispatch(increaseCurrent());
  };

  const resetFormFieldByName = (fieldName) => {
    form.resetFields([fieldName]);
  };

  const handleFormFinish = (formName, info) => {
    if (formName === "actionForm") {
      return setUsersStep();
    }

    if (formName === "userForm") {
      return console.log({ ...info });
    }
  };

  return (
    <Form.Provider onFormFinish={handleFormFinish}>
      {isAction ? (
        <ActionsForm
          formName="actionForm"
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
      ) : isUser ? (
        <UsersForm
          formName="userForm"
          formInstance={form}
          userGroupLabel="Group"
          onBackClick={setActionsStep}
        />
      ) : null}
    </Form.Provider>
  );
};
