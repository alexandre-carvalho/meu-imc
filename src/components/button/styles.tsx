import styled from "styled-components";
import theme from 'theme';

export const Button = styled.button<any>`
width: 200px;
height: 50px;
border-radius: 8px;
border: none;
background-color: ${theme.primary.n0};
opacity:  ${(props: any) => props.opacity};
color: white;
font-size: 12px;
`;