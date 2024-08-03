import { GeneralButtonInterface } from "@/interfaces";
import React, { FC } from "react";


export const GeneralButton:FC<GeneralButtonInterface> = ({
    buttonType,
    textButton,
    classButton,
    onCLick,
    type
})=>{
    return(
        <button 
            className={`${classButton} ${buttonType} generalButton`} 
            onClick={onCLick}
            type={type}
        >
            {textButton}
        </button>
    )
}