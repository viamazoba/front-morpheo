import React, { type FC } from "react";
import { type TextCardStartExamInterface } from "@/interfaces";


export const TextCardStartExam : FC<TextCardStartExamInterface> = ({ title, description, textInfo}) => {
  return (
    <div className="flex flex-col items-center">
        <h6 className="font-poppins text-10 font-semibold leading-12 text-principal-180 sm:font-outfit sm:text-28 sm:leading-3xl sm:font-bold sm:mb-2 line-clamp-2">{title}</h6>
        <p className="font-poppins text-10 font-normal leading-12 text-principal-370 mb-7 mt-1 sm:text-12 sm:leading-xs line-clamp-1">{description}</p>
        <p className="font-poppins text-6 font-normal text-principal-370 sm:text-7">{textInfo}</p>
    </div>
  )
}