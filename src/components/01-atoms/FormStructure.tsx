import React, { FC } from "react";
import Image from "next/image";
import logoMorpheo from '@icons/morpheo_logo3.svg'

type formInterface={
    classContainer: string;
    children: React.ReactNode;
    onSubmit: ()=>void
}

export const FormStructure: FC<formInterface> = ({
    classContainer,
    children,
    onSubmit
})=>{
    return(
        <div className={`${classContainer}`}>
            <div>
                <Image
                    src={logoMorpheo}
                    alt="Logo morpheo"
                    width={100}
                    height={100}
                />
            </div>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}