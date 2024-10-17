import React, { FC, useState } from 'react'
import Image from 'next/image'
import arrow from '@icons/angulo-abajo.svg'
import { Remove } from './custom-icons/Remove'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

type AccordionTestInterface = {
    children?: React.ReactNode
    classNameContainer?: string
    title?: string
    classNameTitle?: string
    classNameContainerAccordion?: string
    subTitle?: string
    classNameSubTitle?: string
    isEditIcon?: boolean
    isRemove?: boolean
}

export const AccordionTest: FC<AccordionTestInterface> = ({
    children = <p>Contenido</p>,
    classNameContainer,
    title = 'Pregunta #1',
    classNameContainerAccordion,
    classNameTitle,
    subTitle,
    classNameSubTitle,
    isEditIcon,
    isRemove = true
}) => {
    // TODO: Sobre saltar este elemento
    // Esto para que entienda que pregunta dejó incompleta

    const [openTab, setOpenTab] = useState<boolean>(false)
    const handleOpenTab = () => {
        setOpenTab(!openTab)
    }
    return (
        <div className={`bg-principal-150 rounded-12 overflow-hidden ${classNameContainer}`}>
            <div className='flex items-center justify-between min-h-14 shadow-md px-3 py-2'>
                <div className={`${classNameContainerAccordion}`}>
                    <p className={`${classNameTitle}`}>{title}</p>
                    {
                        subTitle &&
                        <p className={`${classNameSubTitle}`}>{subTitle}</p>
                    }
                </div>
                <div className='flex px-1 py-1'>
                    {
                        isEditIcon &&
                        <PencilSquareIcon
                            className='cursor-pointer rounded py-0 px-0.5 mr-3 w-7 text-principal-180 hover:bg-principal-180 hover:text-principal-150'
                        />
                    }
                    {
                        isRemove &&
                        <Remove
                            classSvg='min-w-6 w-7 h-7 hover:bg-principal-500 rounded opacity-90 cursor-pointer mr-3'
                        />
                    }
                    <Image
                        src={arrow}
                        width={50}
                        height={50}
                        alt='flecha acordeon'
                        className={`w-7 h-7 ${openTab && 'rotate-180'} rounded cursor-pointer hover:bg-principal-550 hover:bg-opacity-80`}
                        onClick={handleOpenTab}
                    />
                </div>
            </div>
            <div className={`grid overflow-hidden ease-in-out duration-300 ${openTab ? 'grid-rows-[1fr] opacity-100 px-3 py-4 ' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>
                    {children}
                </div>
            </div>
        </div>
    )
}