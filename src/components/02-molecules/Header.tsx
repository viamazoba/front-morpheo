'use client'

import React, { FC, useState } from 'react'
import { type HeaderItemInterface } from '@/interfaces'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@icons/logo.svg'
import menu from '@icons/menu-hamburguesa.svg'
import DisableComponents from '@/HOC/DisableComponents';

const Header: FC<HeaderItemInterface> = ({options}) => {
    // const [isDropdownOpen, setDropdownOpen] = useState(false);
    // const [selectedOption, setSelectedoption] = useState('')

    // const handleMouseEnter = (e:React.MouseEvent<HTMLLIElement>) => {
    //     setDropdownOpen(true);
    //     setSelectedoption(e.currentTarget.textContent || '');
    //     console.log(e.currentTarget.textContent)
    // };

    // const handleMouseLeave = () => {
    //     setDropdownOpen(false);
    //     setSelectedoption('')
    // };

    return (
    <nav className='nav'>
        <div className='cursor-pointer'>
            <Image
                src={logo}
                alt='Logo'
                width={100}
                height={100}
                className='w-48 sm:w-40'
            />
        </div>
        <ul className='hidden justify-between items-center text-base h-full md:flex'>
            <li className='group/option relative px-4 py-0.5 rounded-4 hover:bg-principal-330'>
                <p className='cursor-pointer'>Estudiantes</p>
                <ul className='ulHeader'>
                    <li className='cursor-pointer hover:bg-principal-330 px-6 py-0.5'>
                        Examenes
                    </li>
                    <li className='cursor-pointer hover:bg-principal-330 px-6 py-0.5'>
                        Resultados
                    </li>
                    <li className='cursor-pointer hover:bg-principal-330 px-6 py-0.5'>
                        Practicar
                    </li>
                </ul>
            </li>
            <li className='cursor-pointer'>Profesores</li>
            <li className='cursor-pointer'>Nosotros</li>
        </ul>
        <div className='flex justify-end col-start-3'>
            <Image
                src={menu}
                alt='Menu'
                width={50}
                height={50}
                className='cursor-pointer w-6 sm:w-7'
            />
        </div>
    </nav>
    )
}

export default DisableComponents(Header)