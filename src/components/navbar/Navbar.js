import { StyleNavbar, TextNavbar } from "./Style";
import { ButtonMenu } from "../buttonMenu/ButtonMenu";

export const Navbar = ({text}) =>{
    return(
        <StyleNavbar>
            <TextNavbar >
                {text}
            </TextNavbar>
            <ButtonMenu/>
        </StyleNavbar> 
    )
}