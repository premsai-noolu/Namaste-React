import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>ReactElement-Js Object =>HTMLElement (render)

const heading = React.createElement("h1", { id: "heading" }, "Namste React🚀");

console.log(heading);

//jsx- HTML-like OR xml-like syntax

//jsx (transpiled before it reaches the Js engine)-Parcel-Babel

//JSX =>

const jsxHeading = (
  <h1 id="heading" tabIndex="2">
    Namaste React using JSX🚀
  </h1>
);

//react Functional component

const HeadingComponent = () => {
  return <h1>Namaste React Functional component using JSX🚀🚀</h1>;
};

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste react using jsx
  </h1>
);

const elem = <span>React element</span>;

const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component2 using JSX🚀</h1>
  </div>
);

const title = (
  <div id="container2">
    <h1 className="head" tabIndex="5">
      {elem}
      Namste everyone
    </h1>
    {HeadingComponent2()}
  </div>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
