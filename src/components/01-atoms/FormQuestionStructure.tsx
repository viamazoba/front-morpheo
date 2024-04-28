import React, { FC } from "react";

type formInterface={
    classContainer: string;
    children: React.ReactNode;
    classForm: string;
    onSubmit: ()=>void
}

export const FormQuestionStructure: FC<formInterface> = ({
    classContainer,
    children,
    classForm,
    onSubmit
})=>{
    return(
        <div className={`${classContainer}`}>
            <form onSubmit={onSubmit} className={`${classForm}`}>
                {children}
            </form>
        </div>
    )
}