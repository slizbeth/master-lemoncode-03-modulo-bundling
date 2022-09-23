import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";
import { ByeComponent } from "./bye";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <div className={classes.wrapper}>
        <HelloComponent />
        <ByeComponent />
    </div>
);
