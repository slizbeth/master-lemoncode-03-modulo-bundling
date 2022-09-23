import React from "react";
import classes from "./byeComponentStyles.scss";

export const ByeComponent = () => {
    const [bye, setBye] = React.useState('');

    React.useEffect(() => {
        setBye('webpack');
    }, []);
    
    return (
        <div className={classes.wrapperB}>
            <span>{`¡Adiós ${bye}!`}</span>
            <h2>¡Adiós mundo!</h2>
        </div>
    )
}