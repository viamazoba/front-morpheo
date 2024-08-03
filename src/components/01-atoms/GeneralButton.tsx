import { GeneralButtonInterface } from "@/interfaces";
import React, { FC } from "react";


export const GeneralButton:FC<GeneralButtonInterface> = ({
    buttonType,
    textButton,
    classButton,
    onCLick
})=>{
    return(
        <button 
            className={`${classButton} ${buttonType} generalButton`} 
            onClick={onCLick}
            type="button"
        >
            {textButton}
        </button>
    )
}