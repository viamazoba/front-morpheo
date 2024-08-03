import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CustomAreaText } from "../01-atoms/CustomAreaText";
import { AccordionTest } from "../01-atoms/AccordionTest";
import { CustomInputImage } from "../01-atoms/CustomInputImage";
import { GeneralButton } from "../01-atoms/GeneralButton";
import { FormQuestionStructure } from "../01-atoms/FormQuestionStructure";
import { GroupButtons } from "./GroupButtons";
import { RadioButtons } from "../01-atoms/RadioButtons";
import { StructureQuestions } from "./StructureQuestions";
import { BasicQuestionText } from "./BasicQuestionText";
import { StructureQuestionsText } from "./StructureQuestionsText";

export const FormQuestionsText = ()=>{
    const [ saveQuestion, setSaveQuestion ] = useState(false);
    const [ questions, setQuestions ] = useState([uuidv4()])
    const handleSaveQuestion = () => {
        setSaveQuestion(!saveQuestion)
    }
    return(
        <AccordionTest>
            {
                !saveQuestion ?
                <FormQuestionStructure classContainer={"w-full px-4 pb-5 pt-3"} classForm={"w-full"} onSubmit={()=>{}}>
                    <CustomAreaText 
                        labelText={"Texto para las preguntas"}
                        classContainer="rounded-4 bg-principal-300 py-5 px-2 mb-5"
                    />
                    <BasicQuestionText
                        questions={questions}
                        setQuestions={setQuestions}
                    />
                    <GroupButtons
                        classContainer="px-3 mt-8 sm:flex sm:justify-center w-full sm:px-8" 
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
                    <StructureQuestionsText />
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