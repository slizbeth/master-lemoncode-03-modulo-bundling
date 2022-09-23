import React from "react";
import { createRoot} from "react-dom/client";
import { HelloComponent } from "./helloComponent";
import { ByeComponent } from "./byeComponent";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <div className={classes.wrapper}>
        <HelloComponent />
        <ByeComponent />
    </div>
)