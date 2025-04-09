import { Background, Button, Buttons} from "../../components/Components";

export const Home = () => {
    return(
        <Background text={'Escudo do Mestre'}> 
            <Buttons>
                <Button iconInit={'PlusShield'} text={"CRIAR ESCUDO"} />
                <Button  iconInit={'Shield'} text={"ESCUDOS"}/>
            </Buttons>
        </Background>
    );
}