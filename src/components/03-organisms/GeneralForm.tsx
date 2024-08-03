/* eslint-disable react/jsx-key */
import { FormEvent, useState } from "react"
import { AddMoreSimbol } from "../01-atoms/AddMoreSimbol"
import { ModalQuestions } from "../02-molecules/ModalQuestions"
import { FormQuestions } from "../02-molecules/FormQuestions"
import { FormQuestionsText } from "../02-molecules/FormQuestionsText"

export function GeneralForm() {
    const [questions, setQuestions] = useState<JSX.Element[]>([])
    const [isModal, setIsModal] = useState(false)
    const [seletedOption, setSelectedOption] = useState('')

    const handleModal = ()=> {
        setIsModal(true)
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
       
        if(seletedOption === '1'){
            setQuestions([...questions, <FormQuestions/>])
        } else if (seletedOption === '2'){
            setQuestions([...questions, <FormQuestionsText/>])
        } else {
            console.log('Seleccione una opción ...')
        }
        
        setSelectedOption('')
        setIsModal(false)
    }


    return(
        <section>
            <ModalQuestions
                isModal={isModal}
                setIsModal={setIsModal}
                handleOnSubmit= {handleOnSubmit}
                setSelectedOption={setSelectedOption}
            />
            <div className="flex flex-col justify-center bg-principal-350 rounded-4 gap-4 w-full pt-8 pb-8 px-4">
                
                {
                    questions.length === 0?
                    'No se han agregado preguntas'
                    :
                    questions.map(question => (
                        question
                    ))
                }
            </div>
            <div>
                <AddMoreSimbol
                    text="Agregar Nueva Pregunta"
                    onClick={handleModal}
                />
            </div>
        </section>
    )
}