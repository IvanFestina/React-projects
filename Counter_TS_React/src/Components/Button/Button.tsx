import React from 'react'

type ButtonType = {
    name: string
    callback: () => void
    className: string
    disabled?: boolean
}


export const Button = ({name, callback, className, ...props}: ButtonType) => {
    return (
        <button style={{fontFamily: 'fantasy', color: 'rgba(36, 201, 173, 0.82)'}}
                className={className}
                onClick={callback}
                disabled={props.disabled}>{name}</button>
    )
}
