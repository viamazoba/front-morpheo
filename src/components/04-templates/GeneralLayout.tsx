'use client'

import { GeneralLayoutInterface } from "@/interfaces";
import React, { FC } from "react";
import Image from "next/image";
import pill from "@icons/pill.svg"

const GeneralLayout: FC<GeneralLayoutInterface> = ({children})=>{
    return(
        <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden relative">
            {/* {children} */}
            <div>
                <div className="overflow-y-hidden overflow-x-hidden w-full h-full container z-0">
                    {children}
                </div>
            </div>
            <Image
                src={pill}
                width={50}
                height={50}
                alt="Pildora de fondo"
                className="absolute top-1/3 left-1/10 opacity-25"
            />
            <Image
                src={pill}
                width={50}
                height={50}
                alt="Pildora de fondo"
                className="absolute top-1/2 left-1/2 opacity-25"
            />
        </div>
    )
}

export default GeneralLayout;