import { CarouselInterface } from "@/interfaces";
import React, { FC } from "react";
import { Splide, SplideSlide, Options, SplideProps, SplideTrack } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';

export const Carousel: FC<CarouselInterface> = ({options, className, tag, renderItem, items})=>{
    return(

        <Splide hasTrack={ false } aria-label="My Favorite Images" className={className} options={options} tag={tag}>
            <SplideTrack>
                {items.map((item)=>(
                    <SplideSlide key={item[0]} className={`flex justify-center ${className==='carousel--coupon'?'w-[160px] sm:w-auto sm:mx-5':''}`}>
                        {React.cloneElement(renderItem, { ...item })}
                    </SplideSlide>
                ))
                }
            </SplideTrack>

            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev rounded-3 left-[-3px] carousel__arrow--left"></button>
                <button className="splide__arrow splide__arrow--next rounded-3 right-[-3px] carousel__arrow--right">
                </button>
            </div>
            <ul className="splide__pagination splide__pagination--ltr">

            </ul>
        </Splide>
    )
}

 