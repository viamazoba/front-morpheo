import React, { FC } from 'react'
import { type MoreExamsInterface } from '@/interfaces'
import Image from 'next/image'
import RightArrow  from '@icons/right-arrow.svg'

export const MoreExams: FC<MoreExamsInterface> = ({
    text
    , arrow,
    onClick = () =>{ return console.log('Click!')}
}) => {
  return (
    <div className='flex items-center cursor-pointer' onClick={onClick}>
        <p className='font-poppins text-10 font-semibold leading-12 text-principal-180 underline sm:text-12'>{text}</p>
        {arrow && <div className='hidden sm:block'><Image
            src={RightArrow}
            width={100}
            height={100} 
            alt={'right arrow'}
            className='w-1 h-2 ml-2'    
            />
            </div>
        }
    </div>
  )
}