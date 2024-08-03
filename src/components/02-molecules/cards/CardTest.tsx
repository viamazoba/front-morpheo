import React, { FC } from "react";
import { CardTestInterface } from "@/interfaces";
import Image from 'next/image'
//import { useAppContext } from "@/context";

export const CardTest:FC<CardTestInterface> = ({idInstitution,urlImage='https://picsum.photos/124/100', alt= 'Image coupon agreement', nameInstitution, numSimulation, isDataTest}) =>{
    // const {
    //     handleViewProvider,
    //     // isDataAgreements
    // } = useAppContext()

    // const handleClick = ()=>{
    //     handleViewProvider(idProvider)
    // }
    return (
        <div className="max-w-46 sm:max-w-61 relative cursor-pointer">
            <div className="bg-transparent rounded-bl-20 shadow-4xl w-33 h-30 absolute bottom-0 z-0 sm:w-48">
            </div>
            {
               isDataTest?
               <Image
                src={urlImage}
                width={50}
                height={50}
                alt={alt}
                className='rounded-tr-20 w-46 h-24 z-1 sm:w-61 sm:h-33'
                />
            : 
                <div className="rounded-tr-20 bg-principal-600 w-46 h-24 z-1 sm:w-61 sm:h-33 animate-pulse">
                </div>
            }

            {
                isDataTest?
                <div className="cardTestText">
                    <h5 className="text-10 font-semibold leading-base sm:text-18 sm:leading-24">{nameInstitution}</h5>
                    <p className="text-10 font-medium leading-base sm:text-12 sm:leading-18">{numSimulation} simulacros</p>
                </div>
                :
                <div className="cardTestText pb-2">
                <div className="w-9/10 h-4 sm:h-5 animate-pulse bg-principal-600 rounded-8"></div>
                <div className="w-9/10 h-2 sm:h-3 bg-principal-600 rounded-8 mt-1 sm:mt-2 animate-pulse"></div>
            </div>
            }
            
        </div>
    )

}