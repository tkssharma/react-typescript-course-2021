import * as React from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

export const Context = React.createContext<AppContextInterface | null>(null);

export const AppContextPrvider = Context.Provider;

export const AppContextConsumer = Context.Consumer;
