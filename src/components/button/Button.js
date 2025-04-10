import {StyleButton, ButtonText} from './Style';
import  {Shield}  from '../icons'

const Icons = {
    Shield: <Shield/>
}

export const Button = ({iconInit ,text, iconEnd}) => {
    return(
        <StyleButton>
            {Icons[iconInit]}
            <ButtonText >
                {text}
            </ButtonText>
            {Icons[iconEnd]}
        </StyleButton>
    )
}