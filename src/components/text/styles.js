import styled from "styled-components/native";

export const TextStyle = styled.Text`
    color:  #540B0E;   
    font-size: ${({theme}) => theme.metrics.px(18)}px;       
    font-weight: bold;
    margin-left:${({theme}) => theme.metrics.px(10)}px;   
    margin-right: ${({theme}) => theme.metrics.px(10)}px;
`;