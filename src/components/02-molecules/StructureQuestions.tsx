import React, { FC } from "react";
import { MarkdownText } from "../01-atoms/MarkdownText";
import Image from "next/image";

const questionExample = {
    question: '$1)$ Este es el texto de la pregunta',
    auxiliarText: 'Este es el texto auxiliar',
    urlImage: 'https://picsum.photos/300/124',
    altImage: 'Image',
    options: [
        'A) Esta es la respuesta A $\\sqrt{2}$',
        'B) Esta es la respuesta B $\\frac{1}{2}$',
        'C) Esta es la respuesta C',
        'D) Esta es la respuesta D'
    ]
}

type StructureQuestionsInterface = {
    classContainer?: string;
    questionObject: {
        question: string,
        auxiliarText?:string,
        urlImage: string,
        altImage: string,
        options: string[]
    }
    answer?: string
}

export const StructureQuestions: FC<StructureQuestionsInterface> = ({
    classContainer,
    questionObject = questionExample,
    answer
}) =>{

    return(
        <div className={`${classContainer} bg-principal-680`}>
            <MarkdownText
                textContainer={questionObject.question}
                classContainer="text-base sm:text-18"
            />
            <div className="flex justify-center w-full my-8">
                <Image
                    width={300}
                    height={300} 
                    src={questionObject.urlImage}  
                    alt={questionObject.altImage} 
                />
            </div>
            <MarkdownText
                textContainer={questionObject.auxiliarText||''}
                classContainer="text-base sm:text-18 mb-2"
            />
            {
                questionObject.options.map((element,index) => {
                    return(
                        <MarkdownText
                            key={index}
                            textContainer={element}
                            classContainer="text-14 md:text-base mt-1.5"
                        />
                    )
                })
            }
        </div>
    )
}