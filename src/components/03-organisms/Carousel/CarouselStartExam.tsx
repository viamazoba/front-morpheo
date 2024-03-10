'use client'

import React, { FC } from 'react';
import { Carousel } from './Carousel';
import { CardStartExam } from '../../02-molecules/cards/CardStartExam';
import { CarouselStartExamInterface } from '@/interfaces';

const options = {
    type   : 'loop',
    autoplay: true,
    pagination: true,
    gap: 1, // Espacio entre las tarjetas en píxeles
    padding: 1,
    breakpoints: {
        768: { perPage: 1, gap: 0 },
        1000 : { perPage: 2, gap: 0 },
        2500: { perPage: 3 },
    },
  }

export const CarouselStartExam: FC<CarouselStartExamInterface> = ({items})=>{
    return(
        <Carousel
            renderItem={<CardStartExam/>}
            items={items}
            options={options}
            className='carousel--startExam'
            tag='div'
        />
    )
}