import "./index.scss"

import React from "react";

const Button = ({title, disabled, click}) => {
    return(
        <button className='button' disabled={disabled} onClick={click}>
            {title}
        </button>
    )
}

export default Button;