import React from "react";  

const Button = ({children, styleButton, eventButton, id}) => <button className={`btn btn-sm ${styleButton}`} onClick={(e)=>eventButton(id)}>{children}</button> 
export default Button 