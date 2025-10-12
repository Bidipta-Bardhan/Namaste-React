import React from "react";
import ReactDOM from "react-dom/client";

// single element
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
/**
 * nested structure
 * <div id="parent">
 *  <div id="child1">
 *      <h1>I am h1 inside child1</h1>
 *      <h2>I am h2 inside child1</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I am h1 inside child2</h1>
 *      <h2>I am h2 inside child2</h2>
 *  </div>
 * </div>
 */
// This code can get simplified using JSX
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-child1" }, "I am h1 inside child1"),
    React.createElement("h2", { key: "h2-child1" }, "I am h2 inside child1"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-child2" }, "I am h1 inside child2"),
    React.createElement("h2", { key: "h2-child2" }, "I am h2 inside child2"),
  ]),
]);

console.log(parent) // React Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
