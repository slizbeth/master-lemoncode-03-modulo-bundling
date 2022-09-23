import React from "react";
import * as classes from "./hello.styles.scss";

export const HelloComponent: React.FC = () => {
    return (
        <div className={classes.baseBackground}>
            <h1>Hello from React</h1>
            <span>Hello Parcel</span>
        </div>
    );
};