import React from "react";

import './custom-button.sass'

const CustomButton = ({ children, extraClassName, ...otherProps }) => (
    <button className={`custom-button ${extraClassName ? extraClassName : ''}`} {...otherProps}>
        { children }
    </button>
);

export default CustomButton
