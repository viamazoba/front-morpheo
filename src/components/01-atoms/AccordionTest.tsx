import React, { FC, useState } from 'react'
import Image from 'next/image'
import arrow from '@icons/angulo-abajo.svg'
import { Remove } from './custom-icons/Remove'

type AccordionTestInterface = {
    children: React.ReactNode;
}

export const AccordionTest: FC<AccordionTestInterface> = ({
    children = <p>Contenido</p>
}) =>{
    // TODO: Sobre saltar este elemento
    // Esto para que entienda que pregunta dejó incompleta
    
    const [openTab, setOpenTab] = useState<boolean>(false)
    const handleOpenTab = ()=>{
        setOpenTab(!openTab)
    }
    return(
        <div className=' bg-principal-150 rounded-12 overflow-hidden'>
            <div className='flex items-center justify-between min-h-14 shadow-md px-3 py-2'>
                <p>Pregunta #1</p>
                <div className='flex px-1 py-1'>
                    <Remove 
                        classSvg='w-7 h-7 hover:bg-principal-500 rounded opacity-90 cursor-pointer mr-3'
                    />
                    <Image
                        src={arrow}
                        width={50}
                        height={50}
                        alt='flecha acordeon'
                        className={`w-7 h-7 ${openTab &&'rotate-180'} rounded cursor-pointer hover:bg-principal-550 hover:bg-opacity-80`}
                        onClick={handleOpenTab}
                    />
                </div>
            </div>
                <div className={`grid overflow-hidden ease-in-out duration-300 ${
                    openTab ? 'grid-rows-[1fr] opacity-100 px-3 py-4 ' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className='overflow-hidden'>
                            {children}
                        </div>
                </div>
        </div>
    )
}