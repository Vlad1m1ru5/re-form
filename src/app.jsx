import * as React from "react";
import { ActionsUsersFormContainer } from "./components/actions-users-form.container";
import { PageLayout } from "./components/page-layout";

export const App = () => {
  const [step, setStep] = React.useState({ isActions: true, isUsers: false });

  const setActionsStep = () => {
    setStep({ isActions: true, isUsers: false });
  };

  const setUsersStep = () => {
    setStep({ isActions: false, isUsers: true });
  };

  return (
    <PageLayout>
      <ActionsUsersFormContainer
        {...step}
        selectActionsStep={setActionsStep}
        selectUsersStep={setUsersStep}
      />
    </PageLayout>
  );
};
