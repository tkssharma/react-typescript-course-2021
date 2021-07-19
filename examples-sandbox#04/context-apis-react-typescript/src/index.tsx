import React, { useContext } from "react";
import { render } from "react-dom";
import { PostInfo } from "./PostInfo";
import {
  AppContextInterface,
  AppContextPrvider,
  AppContextConsumer
} from "./AppContext";

const samplePostInfo: AppContextInterface = {
  name: "tkssharma",
  url: "tkssharma.com",
  author: "Tarun Sharma"
};

const Post = () => {
  return (
    <div>
      <PostInfo />
    </div>
  );
};

const App = () => {
  return (
    <AppContextPrvider value={samplePostInfo}>
      <Post />
    </AppContextPrvider>
  );
};

render(<App />, document.getElementById("root"));
