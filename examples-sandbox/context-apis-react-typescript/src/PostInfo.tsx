import * as React from "react";
import { AppContextConsumer } from "./AppContext";

export const PostInfo = () => {
  return (
    <AppContextConsumer>
      {(appContext) =>
        appContext && (
          <div>
            <p>{appContext.author}</p>
            <p>{appContext.name}</p>
            <p>{appContext.url}</p>
          </div>
        )
      }
    </AppContextConsumer>
  );
};
