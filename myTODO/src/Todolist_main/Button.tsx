import React from "react";

type ButtonType = {
    name:string
    callback: () => void
}

export const Button = ({name, callback, ...props}:ButtonType) => {

    return <button onClick={callback}>{name}</button>
}