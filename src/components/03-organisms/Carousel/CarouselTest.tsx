import React, { FC } from 'react';
import { Carousel } from './Carousel';
import { CardTest } from '../../02-molecules/cards/CardTest';
import { CarouselTestInterface } from '@/interfaces';

const options = {
    type   : 'loop',
    pagination: false,
    breakpoints: {
        1100 : { perPage: 1, gap: 0},
        1400 : { perPage: 2, gap: 0},
        2500: { perPage: 3},
    },
  }

export const CarouselTest: FC<CarouselTestInterface> = ({items})=>{
    return(
        <Carousel
            renderItem={<CardTest/>}
            items={items}
            options={options}
            className='h-auto carousel--agreements'
            tag='div'
        />
    )
}