import {StyleButton, ButtonText} from './Style';
import  {Shield,PlusShield,PlusImage,PlusNotes}  from '../icons'

const Icons = {
    Shield: <Shield/>,
    PlusShield: <PlusShield/>,
    PlusImage: <PlusImage/>,
    PlusNotes: <PlusNotes/>
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