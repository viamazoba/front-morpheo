import React, { FC } from "react";
import { MarkdownText } from "../01-atoms/MarkdownText";

const questionExample = {
    generalText: 'Este es el texto general de la pregunta de la pregunta',
    questionsArray: [
        {
            question: '$1)$ Esta es la primera pregunta',
            options: [
                'A) Esta es la respuesta A $\\sqrt{2}$',
                'B) Esta es la respuesta B $\\frac{1}{2}$',
                'C) Esta es la respuesta C',
                'D) Esta es la respuesta D'
            ],
            answer: 'A'
        },
        {
            question: '$2)$ Esta es la segunda pregunta',
            options: [
                'A) Esta es la respuesta A $$2^2$$',
                'B) Esta es la respuesta B $\\frac{1}{2}$',
                'C) Esta es la respuesta C',
                'D) Esta es la respuesta D'
            ],
            answer: 'B'
        },
    ]
}

type QuestionsObject = {
    question: string
    options: string[]
    answer: string
}

type StructureQuestionsTextProps = {
    classContainer?: string;
    generalText?: string
    questionsArray?: QuestionsObject[]
}

export const StructureQuestionsText = ({
    classContainer,
    generalText= questionExample.generalText,
    questionsArray= questionExample.questionsArray,
}: StructureQuestionsTextProps ) =>{

    return(
        <div className={`${classContainer}`}>
            <MarkdownText
                textContainer={generalText}
                classContainer="text-base bg-principal-300 p-3 rounded-4  sm:text-18 mb-4"
            />
            {
                questionsArray.map((element,index) => {
                    return(
                        <div 
                            key={index}
                            className="border border-principal-400 shadow rounded-4 px-5 py-4 mb-7"
                        >
                            <MarkdownText
                                key={index}
                                textContainer={element.question}
                                classContainer="text-14 md:text-base pb-3.5 pt-3"
                            />
                            {
                                element.options.map((option,index2) =>(
                                    <MarkdownText
                                        key={index2}
                                        textContainer={option}
                                        classContainer="text-14 md:text-base pt-4"
                                    />
                                ))
                            }
                            <MarkdownText
                                key={index}
                                textContainer={`Respuesta: ${element.answer}`}
                                classContainer="text-14 md:text-base pt-4"
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}