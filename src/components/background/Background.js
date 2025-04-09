import { StyleBackground } from "./Style";
import { Navbar } from "../navbar/Navbar";

export const Background = ({children, text}) =>{
    return(
        <StyleBackground>
            <Navbar text = {text}/>
            {children}
        </StyleBackground>
    )
}