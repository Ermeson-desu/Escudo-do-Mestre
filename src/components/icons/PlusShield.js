import Svg, {Path, Line} from "react-native-svg";

export const PlusShield = () => {
    return (

        <Svg width="44" 
            height="44" 
            viewBox="0 0 44 44" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">

            <Path d="M22 3.66667L7.33331 9.16667V20.3317C7.33331 29.59 13.585 38.225 22 40.3333C30.415 38.225 36.6666 29.59 36.6666 20.3317V9.16667L22 3.66667ZM33 20.3317C33 27.665 28.325 34.4483 22 36.52C15.675 34.4483 11 27.6833 11 20.3317V11.715L22 7.59L33 11.715V20.3317Z" 
                fill="white"/>
            
            <Line 
                x1="22" 
                y1="15" 
                x2="22" 
                y2="27" 
                stroke="white" 
                strokeWidth="4"/>

            <Line 
                x1="16.0067" 
                y1="21" 
                x2="28.0066" 
                y2="21.04" 
                stroke="white" 
                strokeWidth="4"/>
        </Svg>

    )
}