
import styled from "styled-components/native"

export const StyleButton = styled.TouchableOpacity`
  background-color: #9E2A2B;
  padding: ${({theme})=> theme.metrics.px(20)}px;
  border-radius: ${({theme}) => theme.metrics.px(25)}px;
  margin-top:5%;
  width: ${({theme}) => theme.metrics.px(369)}px;
  flex-direction: row;
  align-items:center;
`;

export const ButtonText = styled.Text`
  padding-Left: ${({theme}) => theme.metrics.px(10)}px;
  color: white;          
  font-size: ${({theme}) => theme.metrics.px(18)}px;       
  font-weight: bold;     
`;