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
        <div className={`${classContainer}`}>
            <MarkdownText
                textContainer={questionObject.question}
                classContainer=""
            />
            <div className="flex justify-center w-full mt-4 mb-6">
                <Image
                    width={300}
                    height={300} 
                    src={questionObject.urlImage}  
                    alt={questionObject.altImage} 
                />
            </div>
            <MarkdownText
                textContainer={questionObject.auxiliarText||''}
                classContainer="mb-2"
            />
            {
                questionObject.options.map((element,index) => {
                    return(
                        <MarkdownText
                            key={index}
                            textContainer={element}
                            classContainer="mt-1"
                        />
                    )
                })
            }
        </div>
    )
}