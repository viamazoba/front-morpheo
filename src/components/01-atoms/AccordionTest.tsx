import React, { useState } from 'react'
import Image from 'next/image'
import arrow from '@icons/angulo-abajo.svg'

export const AccordionTest = () =>{
    const [openTab, setOpenTab] = useState<boolean>(false)
    const handleOpenTab = ()=>{
        setOpenTab(!openTab)
    }
    return(
        <div className=' bg-principal-150 rounded-12 overflow-hidden'>
            <div className='flex items-center justify-between min-h-14 shadow-md px-3 py-2'>
                <p>Pregunta #1</p>
                <div className='cursor-pointer px-1 py-1' onClick={handleOpenTab}>
                    <Image
                        src={arrow}
                        width={50}
                        height={50}
                        alt='flecha acordeon'
                        className={`w-8 h-8 ${openTab &&'rotate-180'}`}
                    />
                </div>
            </div>
                <div className={`grid overflow-hidden ease-in-out duration-300 ${
                    openTab ? 'grid-rows-[1fr] opacity-100 px-3 py-4 ' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className='overflow-hidden'>
                            Contenido
                        </div>
                </div>
        </div>
    )
}