import React from "react";
import './Button.css';

const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn-medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary','blue', 'red', 'green']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {  //see if they have a button style
    const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES [0] 
        //see if they have a button size
    const checkButtonSize = SIZES.includes(buttonSize) ? 
    buttonSize : SIZES [0]
        //see if they have a button color
    const checkButtonColor = COLOR.includes(buttonColor) ? 
    buttonColor : COLOR [0]
    

//return the actual value
return(
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick}
    type={type}>{children}</button>
)
}