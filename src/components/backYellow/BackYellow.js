import {StylesBackYellow, BaseView, StylesBlockUp, StylesBaseViewBlockUp} from './Styles';
import { Text } from '../text/Text';
import { Tab } from '../tab/Tab';

export const BackYellow = ({text}) => {
    return(
        <BaseView>
        
            <StylesBaseViewBlockUp>
                <StylesBlockUp>
                    <Text>
                        {text}
                    </Text>
                </StylesBlockUp>
                <Tab>
                    <Text>
                        
                    </Text>
                </Tab>
            </StylesBaseViewBlockUp>
            
            <StylesBackYellow>
                
            </StylesBackYellow>  
        </BaseView>
    )
}