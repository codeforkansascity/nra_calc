import React from "react";
import ReactDOM from "react-dom";
import AppHeader from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppHeader>Test</AppHeader>, div);
  ReactDOM.unmountComponentAtNode(div);
});
