'use client'

import React from 'react'
import Image from 'next/image'
import logo from '@icons/logo.svg'
import google from '@icons/google.svg'
import facebook from '@icons/facebook.svg'
import twitter from '@icons/twitter.svg'
import linkedin from '@icons/linkedin.svg'
import DisableComponents from '@/HOC/DisableComponents'

const Footer = () => {
  return (
    <footer className='flex justify-around flex-wrap font-roboto w-full text-principal-550 bg-principal-350 pt-12 px-5'> 
        <div className='flex flex-col items-center text-center p-8 mb-12'>
            <Image
                src={logo}
                alt='Logo morpheo'
                width={50}
                height={50}
                className='w-48 mb-1'
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className='mb-12'>
            <h4 className='mb-1'>Exámenes</h4>
            <ul>
                <li>ICFES</li>
                <li>Pruebas Saber</li>
                <li>Universidad Nacional</li>
                <li>Universidad de Antioquia</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center p-8 mb-12'>
            <div className='border-b border-solid border-b-principal-550 text-center mb-5 w-48'>
                <p>Contáctanos</p>
            </div>
            <div className='border-b border-solid border-b-principal-550 text-center w-48'>
                <p>Trabaja con nosotros</p>
            </div>
        </div>
        <div className='flex items-center justify-between max-w-72 min-w-64 mb-12 p-8'>
            <Image
                src={facebook}
                alt='Logo morpheo'
                width={50}
                height={50}
                className='w-8'
            />
            <Image
                src={twitter}
                alt='Logo morpheo'
                width={50}
                height={50}
                className='w-8'
            />
            <Image
                src={linkedin}
                alt='Logo morpheo'
                width={50}
                height={50}
                className='w-8'
            />
            <Image
                src={google}
                alt='Logo morpheo'
                width={50}
                height={50}
                className='w-8'
            />
        </div>
    </footer>
  )
}

export default DisableComponents(Footer)