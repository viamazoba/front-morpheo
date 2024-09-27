/* eslint-disable react/jsx-key */
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
import { CustomInput } from "../01-atoms/CustomInput"
import { CustomSelect } from "../01-atoms/CustomSelect"
import { FormStructure } from "../01-atoms/FormStructure"
import { GeneralButton } from "../01-atoms/GeneralButton"
import { TitleForm } from "../01-atoms/TitleForm"
import { GroupButtons } from "./GroupButtons"
import { FormQuestions } from "./FormQuestions"
import { FormQuestionsText } from "./FormQuestionsText"

type ModalQuestionsProps = {
    isModal: boolean
    setIsModal: Dispatch<SetStateAction<boolean>>
    handleOnSubmit: (e: FormEvent<HTMLFormElement>)=> void
    setSelectedOption: Dispatch<SetStateAction<string>>
}

export const ModalQuestions = ({
    isModal= true,
    setIsModal,
    handleOnSubmit,
    setSelectedOption
}: ModalQuestionsProps) => {
    // const [ seletedOption, setSelectedOption ] = useState("")
    // const [questions, setQuestions] = useState<JSX.Element[]>([])

    const handleCancel= ()=> {
        setIsModal(false)
    }

    // const handleAceptar= ()=> {
    //     const selected = seletedOption
    //     console.log('Antes de entrar: ')
    //     console.log(questions)
    //     if(selected === '1'){
    //         questions.push(<FormQuestions/>)
    //     } else if (selected === '2'){
    //         questions.push(<FormQuestionsText/>)
    //     } else {
    //         console.log('Seleccione una opción ...')
    //     }
    //     console.log(questions)
    //     setSelectedOption('')
    //     setIsModal(false)
    // }

    const handleSeletedOption = (e:ChangeEvent<HTMLSelectElement>)=>{
        setSelectedOption(e.target.value)
    }

    // const handleOnSubmit = (e: FormEvent<HTMLFormElement>)=> {
    //     e.preventDefault()
    //     console.log('Antes de entrar: ')
    //     console.log(questions)
    //     if(seletedOption === '1'){
    //         setQuestions([...questions, <FormQuestions/>])
    //     } else if (seletedOption === '2'){
    //         setQuestions([...questions, <FormQuestionsText/>])
    //     } else {
    //         console.log('Seleccione una opción ...')
    //     }
    //     console.log(questions)
    //     setSelectedOption('')
    //     setIsModal(false)
    // }

    return(
        <div className={`justify-center items-center absolute bg-principal-800 bg-opacity-50 w-full h-full ${isModal ? 'flex fade-in':'hidden fade-out' }`}>
            <FormStructure
                classContainer="max-w-85 min-h-30 pb-7"
                classForm="formResetPassword mt-16 min-h-30"
                onSubmit={handleOnSubmit}
            >
                {/* <TitleForm
                    titleText="Establece la Pregunta"
                    paragraph="Las preguntas múltiples son aquellas con un texto, seguidas con diferentes preguntas. Las preguntas únicas son las normalmente utilizadas en cualquier examen."
                    classContainer="mb-8"
                /> */}
                <CustomSelect
                    idSelect={'selectQuestions'}
                    label={'Tipo de pregunta'}
                    options={[
                        {
                            idOption:'1',
                            value:'Única pregunta'
                        },
                        {
                            idOption:'2',
                            value:'Múltiples preguntas'
                        }
                    ]}
                    handleSeletedOption={handleSeletedOption}
                />
                {/* <GeneralButton 
                    buttonType={"redButton"} 
                    textButton={"Aceptar"} 
                    classButton="max-h-9 mt-7"
                /> */}
                <GroupButtons
                    classContainer="px-3 mt-8 max-h-18 md:max-h-12 sm:flex sm:justify-center w-full sm:px-8" 
                    arrayButtons={[
                        {
                            nameButton:'Aceptar',
                            typeButton:'blueTwoButton',
                            classButton: 'mb-1 md:max-w-96 sm:mb-0 sm:mx-1',
                            type: 'submit'
                        },
                        {
                            nameButton:'Cancelar',
                            typeButton:'redButton',
                            classButton: 'md:max-w-96 sm:mx-1',
                            onCLick: handleCancel  
                        }
                    ]}
                />
            </FormStructure>
        </div>
    )
}