import Image from 'next/image'
import React, { FC } from 'react'
import { type ImageStartExamInterface } from '@/interfaces'

export const ImageStartExam: FC<ImageStartExamInterface> = ({src= 'https://picsum.photos/124/100', alt= 'Image coupon'}) => {
  return (
    <div>
        <Image
            src={src}
            width={50}
            height={50}
            alt={alt}
            className='w-32 h-24 rounded-9 sm:w-61 sm:h-50'
        />
    </div>
  )
}