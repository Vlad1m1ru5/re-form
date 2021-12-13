import * as React from "react";
import { ActionsUsersFormContainer } from "./components/actions-users-form.container";
import { ActionsUsersStepsContainer } from "./components/actions-users-steps.container";
import { PageLayout } from "./components/page-layout";
import { ContextProvider as Provider } from "./context/context-provider";

export const App = () => {
  return (
    <Provider>
      <PageLayout>
        <ActionsUsersStepsContainer />
        <ActionsUsersFormContainer />
      </PageLayout>
    </Provider>
  );
};
