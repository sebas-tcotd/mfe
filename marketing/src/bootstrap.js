import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Mount function to start the app
const mount = (element) => {
  ReactDOM.render(<App />, element);
};

// If we are in development isolation, call mount inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container and we should export the mount function
export { mount };
