import React, { FC, FormEvent } from "react";
import Image from "next/image";
import logoMorpheo from '@icons/morpheo_logo3.svg'

type formInterface = {
    classFatherContainer?: string
    classContainer: string;
    children: React.ReactNode;
    classForm: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const FormStructure: FC<formInterface> = ({
    classFatherContainer,
    classContainer,
    children,
    classForm,
    onSubmit
}) => {
    return (
        <div className={`flex justify-center items-center w-full h-[100vh] ${classFatherContainer ? classFatherContainer : 'pb-52'}`}>
            <div className={`${classContainer} bg-principal-150 rounded-12 shadow-6xl px-8 py-5 relative m-6 sm:m-12 z-1`}>
                <div className="flex items-center justify-center bg-principal-350 rounded-[100%] w-20 h-20 sm:w-24 sm:h-24 bg-opacity-90 absolute top-[-45px] left-2/4 translate-x-[-50%] shadow-blueOne">
                    <Image
                        src={logoMorpheo}
                        alt="Logo morpheo"
                        width={70}
                        height={70}
                        className="sm:w-16 sm:h-16 w-14 h-14"
                    />
                </div>
                <form onSubmit={onSubmit} className={`${classForm}`}>
                    {children}
                </form>
            </div>
        </div>
    )
}