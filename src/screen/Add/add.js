import {Background, Buttons, Button} from '../../components/Components';

export const Add = () => {
    return (
        <Background text={'Criar escudo'}>
            <Buttons>
                <Button text={"NOTA"} />
                <Button text={"IMAGEM"}/>
            </Buttons>
        </Background>
    )
}
