import {StylesBackYellow, BaseView, StylesBlockUp} from './Styles';
import { Text } from '../text/Text';

export const BackYellow = ({text}) => {
    return(
        <BaseView>
            <StylesBlockUp>
                <Text>
                    {text}
                </Text>
            </StylesBlockUp>
            <StylesBackYellow>

            </StylesBackYellow>  
        </BaseView>
    )
}