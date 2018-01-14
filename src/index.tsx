import * as React from "react";
import * as ReactDom from "react-dom";

const appdiv = document.createElement("div");
appdiv.id = "app";
document.body.appendChild(appdiv);

ReactDom.render(<div>Hello World</div>, appdiv);