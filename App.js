import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",
    {id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{}, "This is Namste React🚀"),
    React.createElement("h2",{}, "fcgvhbjn")
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{}, "im a h1 tag"),
    React.createElement("h2",{}, "im a h2 tag")
    ]),

]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);