import React from "react";
import * as classes from "./bye.styles.scss";

export const ByeComponent: React.FC = () => {
    return (
        <div className={classes.baseBackground}>
            <h1>Bye from React</h1>
            <span>Bye Parcel</span>
        </div>
    );
};