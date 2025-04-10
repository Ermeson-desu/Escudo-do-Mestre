import {Background, Buttons, Button} from '../../components/Components';

export const Add = () => {
    return (
        <Background text={'Criar escudo'}>
            <Buttons>
                <Button iconInit = {'PlusNotes'} text={"NOTA"} />
                <Button iconInit = {'PlusImage'} text={"IMAGEM"}/>
            </Buttons>
        </Background>
    )
}
