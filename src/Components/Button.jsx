import styled from "styled-components"

const Button = styled.button`
    margin:50px;
    margin-top:300px;
    border:none;
    height:50px;
    width:200px;
    background-color: ${({inputColor})=> inputColor}; 
    background-color:${({Default}) => Default};
    border:${({border}) => border};
    border-style : ${({borderStyle})=>borderStyle ? "Dashed" : "null"} ;
    background:${({text}) => text ? "white" : "white"}
    color:  ${({inputColor})=>inputColor? "white" : "null"};
    color: ${({color})=> color}
` 

export default Button