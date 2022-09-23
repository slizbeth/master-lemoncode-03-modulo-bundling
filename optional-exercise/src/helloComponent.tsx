import React from "react";
import classes from "./helloComponentStyles.scss";

export const HelloComponent = () => {
    const [hello, setHello] = React.useState('');

    React.useEffect(() => {
        setHello('webpack');
    }, []);
    
    return (
        <div className={classes.wrapperA}>
            <h2>¡Hola mundo!</h2>
            <span>{`¡Hola ${hello}!`}</span>
        </div>
    )
}