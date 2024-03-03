import React from 'react'
import { CardBannerHome } from './cards/CardBannerHome'
import cell from '@icons/cell.svg'
import cellTwo from '@icons/cell-two.svg'
import Image from 'next/image'

export const BannerInfoHome = ()=>{
    return(
        <section className='w-full h-2/5 bg-principal-100 py-14 sm:py-33'>
            <div className='relative grid grid-rows-4 justify-center gap-3 w-full sm:flex sm:flex-row sm:justify-evenly'>
                <CardBannerHome
                    nameImage='atom'
                    textCard='Explora'
                    className='sm:mb-28 z-1'
                />
                <CardBannerHome
                    nameImage='microscope'
                    textCard='Experimenta'
                    className='sm:mt-28 z-1'
                />
                <CardBannerHome
                    nameImage='molecule'
                    textCard='Aprende'
                    className='sm:mb-28 z-1'
                />
                <CardBannerHome
                    nameImage='exam'
                    textCard='Aprueba'
                    className='sm:mt-28 z-1'
                />
                <Image
                    src={cell}
                    width={50}
                    height={50}
                    alt='Cell background'
                    className='absolute z-0 cell'
                />
                <Image
                    src={cell}
                    width={50}
                    height={50}
                    alt='Cell background'
                    className='absolute z-0 top-5 right-33 rotate-12'
                />
                <Image
                    src={cell}
                    width={50}
                    height={50}
                    alt='Cell background'
                    className='absolute z-0 top-0 left-[8%] rotate-45'
                />
                <Image
                    src={cell}
                    width={50}
                    height={50}
                    alt='Cell background'
                    className='absolute z-0 bottom-[10%] left-[20%] rotate-45'
                />
                <Image
                    src={cellTwo}
                    width={50}
                    height={50}
                    alt='Cell background'
                    className='absolute z-0 bottom-[5%] right-[30%] rotate-45'
                />
                <Image
                    src={cellTwo}
                    width={50}
                    height={50}
                    alt='Cell background'
                    className='absolute z-0 top-[10%] left-[25%] rotate-45 cell'
                />
                
            </div>

        </section>
    )
}