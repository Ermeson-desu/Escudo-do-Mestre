import styled from "styled-components/native";

export const StyleNavbar = styled.View`
    padding: ${({theme})=> theme.metrics.px(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #B47312;
`;

export const TextNavbar = styled.Text`
    color: white;          
    font-size: ${({theme}) => theme.metrics.px(25)}px;       
    font-weight: bold;
    margin-left:${({theme}) => theme.metrics.px(10)}px;   
    margin-right: ${({theme}) => theme.metrics.px(10)}px;
    flex:1;
`;