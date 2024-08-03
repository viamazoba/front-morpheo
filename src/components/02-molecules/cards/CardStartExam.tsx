import React, { FC } from "react";
import { type CardStartExamInterface } from "@/interfaces";
import { ImageStartExam } from "@/components/01-atoms/ImageStartExam";
import { TextCardStartExam } from "@/components/01-atoms/texts/TextCardStartExam";
import { MoreExams } from "@/components/01-atoms/texts/MoreExams";
import { ButtonStartExam } from "@/components/01-atoms/ButtonStartExam";
import { BandStartExam } from "@/components/01-atoms/BandStartExam";
import Image from "next/image";
//import { useAppContext } from "@/context";

export const CardStartExam: FC<CardStartExamInterface> = ({
    id,
    src,
    alt,
    title,
    description,
    textInfo,
    text,
    arrow,
    buttonText,
    newExam,
    isDataCard,
    onClick
})=>{
    
    return(
        <div className="cardStartExam relative" id={id}>
            {
                isDataCard?
                (newExam && <div className="absolute top-0 right-[-2.5px] sm:right-0">
                    <BandStartExam
                        newExam={newExam}
                    />
                </div>)
                : null
            }
            
            {
                isDataCard?
                <ImageStartExam 
                    src= {src || ''}
                    alt= {alt || ''}
                />
                :
                <div className="w-32 h-24 bg-principal-600 rounded-9 sm:w-61 sm:h-50 animate-pulse">
                </div>
            }
            
            <div className="mt-2.5 mb-2">
                {
                    isDataCard?
                    <TextCardStartExam
                        title={title || ''}
                        description={description || ''}
                        textInfo={textInfo || ''}
                    />
                    :
                    <div>
                        <div className="flex flex-col items-center w-full min-h-30">
                            <div className="h-6 w-full sm:h-8 sm:w-[170%] bg-principal-600 rounded-8 animate-pulse"></div>
                            <div className="h-8 w-full sm:h-6 sm:w-[150%] bg-principal-600 rounded-8 mb-7 mt-1 animate-pulse"></div>
                            <div className="text-6 text-principal-600 h-5 w-full sm:h-6 sm:w-[170%] bg-principal-600 rounded-8 animate-pulse">{textInfo}</div>
                        </div>
                    </div>
                }

                
            </div>

            
            {
                isDataCard?
                <ButtonStartExam 
                    buttonText={buttonText?buttonText:'Obtener cupón'}
                    onClick={onClick}
                    secondary= {false}
                />
                :
                <div className="min-h-7 w-[100px] sm:min-w-40 sm:min-h-10 bg-principal-180 rounded-4 pr-4 animate-pulse">
                </div>
            }
            <div className="felx mt-2.5 sm:mt-5">
                {
                    isDataCard && <MoreExams
                        text={text?text:'Ver más cupones'}
                        arrow= {arrow || false}
                    />
                }
            </div>
        </div>
    );
}