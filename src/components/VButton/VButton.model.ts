import styled from "styled-components";
import {device} from "../styles/Breackpoints"

type ButtonProps ={
    bg : string;
}

export const  Button = styled.button<ButtonProps>`

 background-color: transparent;
 border: none;


 @media ${device.laptop} {
    display: none
 }
`


