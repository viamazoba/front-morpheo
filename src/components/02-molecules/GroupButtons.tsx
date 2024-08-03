import React, { FC } from "react";
import { GeneralButton } from "../01-atoms/GeneralButton";

type ButtonGroupInterface = {
    nameButton: string,
    typeButton: string,
    classButton: string,
    onCLick?: ()=> void
}

type GroupButtonsInterface = {
    classContainer?: string;
    arrayButtons : ButtonGroupInterface[]
}

export const GroupButtons: FC<GroupButtonsInterface> = ({
    classContainer,
    arrayButtons = [{
        nameButton : 'Guardar',
        typeButton : 'blueTwoButton',
        classButton :  '',
    },
    {
        nameButton: 'Borrar contenido',
        typeButton: 'redButton',
        classButton: '',
    },
    ]
}
) =>{
    return (
        <div className={`${classContainer ? classContainer:'w-full sm:flex'}`}>
            {arrayButtons.map((item,index)=>(
                <GeneralButton
                    key={index} 
                    buttonType={item.typeButton} 
                    textButton={item.nameButton} 
                    classButton={item.classButton}
                    onCLick={item.onCLick}
                />
            ))}
        </div>
    )
}