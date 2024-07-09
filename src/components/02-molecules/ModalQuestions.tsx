import { Dispatch, SetStateAction, useState } from "react"
import { CustomInput } from "../01-atoms/CustomInput"
import { CustomSelect } from "../01-atoms/CustomSelect"
import { FormStructure } from "../01-atoms/FormStructure"
import { GeneralButton } from "../01-atoms/GeneralButton"
import { TitleForm } from "../01-atoms/TitleForm"
import { GroupButtons } from "./GroupButtons"

type ModalQuestionsProps = {
    isModal: boolean
    setIsModal: Dispatch<SetStateAction<boolean>>
}

export const ModalQuestions = ({
    isModal= true,
    setIsModal
}: ModalQuestionsProps) => {
    // const [ isModal, setIsModal ] = useState(true)

    const handleCancel= ()=> {
        setIsModal(false)
    }

    const handleAceptar= ()=> {
        setIsModal(false)
    }

    return(
        <div className={`justify-center items-center absolute bg-principal-800 bg-opacity-50 w-full h-full ${isModal ? 'flex fade-in':'hidden fade-out' }`}>
            <FormStructure
                classContainer="max-w-85 min-h-30 pb-7"
                classForm="formResetPassword mt-16 min-h-30"
                onSubmit={()=>{}}
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
                />
                {/* <GeneralButton 
                    buttonType={"redButton"} 
                    textButton={"Aceptar"} 
                    classButton="max-h-9 mt-7"
                /> */}
                <GroupButtons
                        classContainer="px-3 mt-8 max-h-12 sm:flex sm:justify-center w-full sm:px-8" 
                        arrayButtons={[
                            {
                                nameButton:'Aceptar',
                                typeButton:'blueTwoButton',
                                classButton: 'mb-1 md:max-w-96 sm:mb-0 sm:mx-1',
                                onCLick: handleAceptar 
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