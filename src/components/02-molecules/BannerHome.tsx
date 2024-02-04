import React, { useState } from 'react'

export const BannerHome = () => {
    
  
    return (
        <div className='font-poppins bg-principal-750 min-h-52 relative py-8 pl-10 md:pl-20'>
            <div className='animate-fade-in-out text-principal-680 font-semibold text-24 sm:text-2xl leading-[60px] w-1/3 max-w-2xl'>
                <p className=''>Practica</p>
                <p className='text-center py-5 w-full'>Aprueba</p>
                <p className='text-end'>Avanza</p>
            </div>
            <div className='w-1/2 h-full diagonal first-diagonal absolute top-0 right-[16%] shadow-6xl z-1'>
            </div>
            <div className='w-1/2 h-full diagonal second-diagonal absolute top-0 right-0 shadow-6xl z-1'>
            </div>
            <div className='w-2/5 h-full absolute top-0 right-0 shadow-6xl poligono z-0'>
            </div>
        </div>
    )
}