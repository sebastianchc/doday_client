import { Fragment } from "react";
import { ChildrenProps } from "utils/types/props/types";
import ProjectsState from "./Projects/ProjectsState";

interface ProviderProps extends ChildrenProps {}

type Provider = ({ children }: ProviderProps) => JSX.Element;

const Providers = (...providers: Provider[]): Provider => {
  return providers.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ProviderProps): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <Fragment>{children}</Fragment>
  );
};

const AppProvider = Providers(ProjectsState);

export default AppProvider;
