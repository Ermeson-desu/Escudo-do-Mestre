import { theme } from "@/src/styles/theme";
import styled from "styled-components";


export const StylesTab = styled.View`
    background-color: #FEDAA5;
    height:90%;
    margin-left: 1%;
    border-top-left-radius:${({theme})=> theme.metrics.px(10)}px;
    border-top-right-radius:${({theme})=> theme.metrics.px(10)}px;
    justify-content:center;
`;