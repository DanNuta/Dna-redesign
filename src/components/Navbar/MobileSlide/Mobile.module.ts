import styled from "styled-components";

type Props = {
    inline?: boolean
}

export const MobileNav = styled.div`
  
  background-color: red;
`

export const UlNav = styled.ul<Props>`
 display: ${(props) => props.inline ? "flex" : "block"};
`