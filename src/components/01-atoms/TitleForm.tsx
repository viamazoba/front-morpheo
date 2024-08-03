import { TitleFormInterface } from "@/interfaces";
import React, { FC } from "react";

export const TitleForm: FC<TitleFormInterface> = ({
    titleText,
    paragraph,
    classContainer
})=>{
    return(
        <div className={`${classContainer}`}>
            <h2 className="text-26">{titleText}</h2>
            <p className="text-principal-320 text-14">{paragraph}</p>
        </div>
    )
}