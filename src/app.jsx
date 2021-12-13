import * as React from "react";
import { ActionsUsersFormContainer } from "./components/actions-users-form.container";
import { ActionsUsersStepsContainer } from "./components/actions-users-steps.container";
import { PageLayout } from "./components/page-layout";
import { SpaceCard } from "./components/space-card";
import { ContextProvider as Provider } from "./context/context-provider";

export const App = () => {
  return (
    <Provider>
      <PageLayout>
        <SpaceCard>
          <ActionsUsersStepsContainer />
          <ActionsUsersFormContainer />
        </SpaceCard>
      </PageLayout>
    </Provider>
  );
};
