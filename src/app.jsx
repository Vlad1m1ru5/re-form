import * as React from "react";
import { GostFormContainer } from "./components/gost-form.container";
import { GostStepsContainer } from "./components/gost-steps.container";
import { PageLayout } from "./components/page-layout";
import { SpaceCard } from "./components/space-card";
import { SpinContainer } from "./components/spin.container";
import { StepContextProvider as Provider } from "./context/step.provider";

export const App = () => {
  return (
    <Provider>
      <PageLayout>
        <SpinContainer>
          <SpaceCard>
            <GostStepsContainer />
            <GostFormContainer />
          </SpaceCard>
        </SpinContainer>
      </PageLayout>
    </Provider>
  );
};
