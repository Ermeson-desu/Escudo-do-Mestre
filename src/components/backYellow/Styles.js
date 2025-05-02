import styled from "styled-components";

export const StylesBaseViewBlockUp = styled.View`
    height:5%;
    flex-direction:row;
    
`;

export const BaseView = styled.View`
    margin-left: 10%;
    width: 100%;
    justify-content:flex-end;
    align-items: flex-start;
`;

export const StylesBackYellow = styled.View`
    background-color: #FEDAA5;
    width: 90%;
    height:92%;
    border-top-right-radius:${({theme}) => theme.metrics.px(10)}px;
`;

export const StylesBlockUp = styled.View`
    background-color: #FEDAA5;
    height:100%;
    border-top-left-radius:${({theme}) => theme.metrics.px(10)}px;
    border-top-right-radius:${({theme}) => theme.metrics.px(10)}px;
    justify-content:center;
`;