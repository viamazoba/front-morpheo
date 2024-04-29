import React from "react";
import { CustomAreaText } from "../01-atoms/CustomAreaText";
import { AccordionTest } from "../01-atoms/AccordionTest";
import { CustomInputImage } from "../01-atoms/CustomInputImage";
import { GeneralButton } from "../01-atoms/GeneralButton";
import { FormQuestionStructure } from "../01-atoms/FormQuestionStructure";

export const FormQuestions = ()=>{
    return(
        <AccordionTest>
            <FormQuestionStructure classContainer={"w-full px-4 pb-5 pt-3"} classForm={"w-full"} onSubmit={()=>{}}>
                <CustomAreaText labelText={"Ingrese pregunta"}/>
                <CustomInputImage
                    classContainer = {'flex justify-center w-full my-8'}
                />
                <CustomAreaText 
                    labelText={"Ingrese Texto auxiliar"}
                    classContainer="mb-8"
                />
                <CustomAreaText 
                    labelText={"Respuesta A"}
                    classContainer="mb-2"
                />
                <CustomAreaText 
                    labelText={"Respuesta B"}
                    classContainer="mb-2"
                />
                <CustomAreaText 
                    labelText={"Respuesta C"}
                    classContainer="mb-2"
                />
                <CustomAreaText 
                    labelText={"Respuesta D"}
                />
                <GeneralButton 
                    buttonType={"blueTwoButton"} 
                    textButton={"Guardar"} 
                    classButton={"mt-8"}
                />
                <GeneralButton 
                    buttonType={"redButton"} 
                    textButton={"Borrar contenido"} 
                    classButton={"mt-3"}
                />
            </FormQuestionStructure>
        </AccordionTest>
    )
}