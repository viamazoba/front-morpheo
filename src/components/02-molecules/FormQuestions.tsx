import React, { useState } from "react";
import { CustomAreaText } from "../01-atoms/CustomAreaText";
import { AccordionTest } from "../01-atoms/AccordionTest";
import { CustomInputImage } from "../01-atoms/CustomInputImage";
import { GeneralButton } from "../01-atoms/GeneralButton";
import { FormQuestionStructure } from "../01-atoms/FormQuestionStructure";
import { GroupButtons } from "./GroupButtons";
import { RadioButtons } from "../01-atoms/RadioButtons";
import { StructureQuestions } from "./StructureQuestions";

export const FormQuestions = ()=>{
    const [ saveQuestion, setSaveQuestion ] = useState(false);
    const handleSaveQuestion = () => {
        setSaveQuestion(!saveQuestion)
    }
    return(
        <AccordionTest>
            {
                !saveQuestion ?
                <FormQuestionStructure classContainer={"w-full px-4 pb-5 pt-3"} classForm={"w-full"} onSubmit={()=>{}}>
                    <CustomAreaText labelText={"Ingrese pregunta"}/>
                    <CustomInputImage
                        classContainer = {'flex justify-center w-full my-8'}
                    />
                    <CustomAreaText 
                        labelText={"Ingrese Texto auxiliar y respuestas"}
                        classContainer="mb-8"
                    />
                    <RadioButtons 
                        classContainer='mb-8'
                    />
                    <GroupButtons
                        classContainer="px-3 sm:flex sm:justify-center w-full sm:px-8" 
                        arrayButtons={[
                            {
                                nameButton:'Guardar',
                                typeButton:'blueTwoButton',
                                classButton: 'mb-1 md:max-w-96 sm:mb-0 sm:mx-1',
                                onCLick: handleSaveQuestion 
                            },
                            {
                                nameButton:'Restablecer',
                                typeButton:'redButton',
                                classButton: 'md:max-w-96 sm:mx-1',
                                onCLick: handleSaveQuestion  
                            }
                        ]}
                    />
                </FormQuestionStructure>
                :
                <>
                    <StructureQuestions/>
                    <div className="flex justify-center w-full pt-10 pb-5">
                        <GeneralButton
                            textButton='Editar'
                            buttonType='redButton'
                            classButton= 'md:max-w-96 sm:mx-1'
                            onCLick={handleSaveQuestion} 
                        />
                    </div>
                </>
            }
        </AccordionTest>
    )
}