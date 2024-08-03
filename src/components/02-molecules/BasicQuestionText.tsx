import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction, useState } from "react"
import { CustomAreaText } from "../01-atoms/CustomAreaText"
import { RadioButtons } from "../01-atoms/RadioButtons"
import { AddMore } from "../01-atoms/custom-icons/AddMore"
import { CloseCircle } from "../01-atoms/custom-icons/CloseCircle"
import { AddMoreSimbol } from '../01-atoms/AddMoreSimbol';

type BasicQuestionTextProps = {
    questions: string[]
    setQuestions: Dispatch<SetStateAction<string[]>>
}

export const BasicQuestionText = ({
    questions=[''],
    setQuestions
}: BasicQuestionTextProps)=> {
    // const initialAnswer = uuidv4()
    // const [ questions, setQuestions ] = useState([initialAnswer])

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            uuidv4()
        ])
    }

    const handleRemoveQuestion = (id:string) => {
        const newQuestions = questions.filter(question => question !== id)
        setQuestions([
            ...newQuestions
        ])
    }

    return (
        <div>
            {
                questions.map((question, index) => (
                    <div 
                        className="border border-principal-400 shadow rounded-8 px-5 pt-5 mt-5 first:mt-0"
                        key={question}
                    >   
                        <div className='flex justify-between  mb-5'>
                            <p 
                                className='flex text-center font-semibold text-principal-150 rounded-4 bg-principal-100 bg-opacity-80 min-w-36 py-1 pl-3'
                            >
                                Pregunta:&nbsp;
                                <span className='font-normal'>
                                    {index + 1} de {questions.length}
                                </span>
                            </p>
                            <div className="flex justify-end items-center w-full">
                                <p className="text-12 mr-1">Eliminar pregunta</p>
                                <CloseCircle
                                    onClick={()=> handleRemoveQuestion(question)}
                                />
                            </div>
                        </div>
                        <CustomAreaText 
                            labelText={"Ingrese la pregunta"}
                            classContainer="mb-8"
                        />
                        <CustomAreaText 
                            labelText={"Ingrese las posibles respuestas"}
                            classContainer="mb-8"
                        />
                        <RadioButtons 
                            classContainer='mb-8'
                        />
                    </div>
                ))
            }
            <AddMoreSimbol
                text={'Añadir pregunta'}
                onClick={handleAddQuestion}
            />
        </div>
    )
}