import React from "react";
import { CustomAreaText } from "../01-atoms/CustomAreaText";
import { AccordionTest } from "../01-atoms/AccordionTest";
import { CustomInputImage } from "../01-atoms/CustomInputImage";
import { GeneralButton } from "../01-atoms/GeneralButton";
import { FormQuestionStructure } from "../01-atoms/FormQuestionStructure";
import { GroupButtons } from "./GroupButtons";

export const FormQuestions = ()=>{
    return(
        <AccordionTest>
            <FormQuestionStructure classContainer={"w-full px-4 pb-5 pt-3"} classForm={"w-full"} onSubmit={()=>{}}>
                <CustomAreaText labelText={"Ingrese pregunta"}/>
                <CustomInputImage
                    classContainer = {'flex justify-center w-full my-8'}
                />
                <CustomAreaText 
                    labelText={"Ingrese Texto auxiliar y respuestas"}
                    classContainer="mb-8"
                />
                <CustomAreaText 
                    labelText={"Ingrese la respuesta correcta"}
                    classContainer="mb-2"
                />
                {/* <CustomAreaText 
                    labelText={"Respuesta B"}
                    classContainer="mb-2"
                />
                <CustomAreaText 
                    labelText={"Respuesta C"}
                    classContainer="mb-2"
                />
                <CustomAreaText 
                    labelText={"Respuesta D"}
                /> */}
                {/* <GeneralButton 
                    buttonType={"blueTwoButton"} 
                    textButton={"Guardar"} 
                    classButton={"mt-8"}
                />
                <GeneralButton 
                    buttonType={"redButton"} 
                    textButton={"Borrar contenido"} 
                    classButton={"mt-3"}
                /> */}
                <GroupButtons
                    classContainer="px-3 sm:flex sm:justify-center w-full sm:px-8" 
                    arrayButtons={[
                        {
                            nameButton:'Guardar',
                            typeButton:'blueTwoButton',
                            classButton: 'mb-1 md:max-w-96 sm:mb-0 sm:mx-1' 
                        },
                        {
                            nameButton:'Restablecer',
                            typeButton:'redButton',
                            classButton: 'md:max-w-96 sm:mx-1' 
                        }
                    ]}
                />
            </FormQuestionStructure>
        </AccordionTest>
    )
}