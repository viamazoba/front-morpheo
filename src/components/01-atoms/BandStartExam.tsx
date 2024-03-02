import Image from 'next/image'
import React, { FC } from 'react'
import { type BandStartExamInterface } from '@/interfaces'
import BandMobile from '@icons/band.svg'
import BandDesktop from '@icons/band-discount.svg'

export const BandStartExam: FC<BandStartExamInterface> = ({newExam}) => {
  return (
    <div className={` text-principal-150 relative ${newExam?'':'hidden'} sm:font-bold`}>
        <div className='flex flex-col items-center origin-center rotate-45 absolute top-7 left-7 sm:top-9 sm:left-8'>
            {/* <p className='font-poppins font-bold text-10 sm:text-14 leading-[8px]'>{newExam}</p> */}
            <p className='font-poppins font-bold text-10 sm:text-13'>Nuevo examen</p>
        </div>
        <Image
            src={BandMobile}
            width={100}
            height={100}
            alt="band discount"
            className="top-0 right-[-2.5px] sm:hidden"
        />
        <Image
            src={BandDesktop}
            width={100}
            height={100}
            alt="band new exam"
            className="hidden w-21 top-0 right-0 sm:w-32 sm:block"
        />
    </div>
  )
}