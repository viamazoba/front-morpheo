import React, { FC } from 'react'
import Image from 'next/image'
import atom from '@icons/atom.svg'
import exam from '@icons/exam.svg'
import microscope from '@icons/microscope.svg'
import molecule from '@icons/molecule.svg'
import { CardBannerHomeInterface } from '@/interfaces'

export const CardBannerHome:FC<CardBannerHomeInterface> = ({
    nameImage = 'atom', 
    textCard = 'Explora',
    className
})=>{
    return(
        <div className={`flex flex-col items-center bg-principal-200 shadow-3xl w-37 rounded-12 py-5 px-5 min-h-36 ${className}`}>
            {
                (nameImage==='atom')&&
                <Image
                    width={70}
                    height={70}
                    alt='Image ciencia'
                    src={atom}
                />
            }
            {
                (nameImage==='exam')&&
                <Image
                    width={70}
                    height={70}
                    alt='Imagen ciencia'
                    src={exam}
                />
            }
            {
                (nameImage==='microscope')&&
                <Image
                    width={70}
                    height={70}
                    alt='Imagen ciencia'
                    src={microscope}
                />
            }
            {
                (nameImage==='molecule')&&
                <Image
                    width={70}
                    height={70}
                    alt='Imagen ciencia'
                    src={molecule}
                />
            }
            <p className='mt-2'>{textCard}</p>
        </div>
    )
}