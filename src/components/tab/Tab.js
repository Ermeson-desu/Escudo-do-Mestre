import { StylesTab } from "./styles";
import { Text } from "../text/Text";

export const Tab = ({title}) => {
    return(
        <StylesTab>
            <Text>
                {title}
            </Text>
        </StylesTab>
    )
}