'use client'

import React from "react";
import { FormStructure } from "../../components/01-atoms/FormStructure";
import { CustomInput } from "@/components/01-atoms/CustomInput";
import { GeneralButton } from "@/components/01-atoms/GeneralButton";

const Login =()=>{
    const handleSubmit = (e:any)=>{
        e.preventDefault()
    }
    return(
        <FormStructure
            classContainer="max-w-85 h-96"
            classForm="grid grid-rows-3 gap-y-7 mt-12"
            onSubmit={()=>{}}
        >
            <CustomInput
                idInput="email"
                labelInput="Correo Electrónico" 
                typeInput={"email"}
                placeholderInput="morpheo@ejemplo.com"                
            />
            <CustomInput
                idInput="password"
                labelInput="Contraseña" 
                typeInput={"password"}
                placeholderInput="********"                
            />
            <GeneralButton 
                buttonType={"redButton"} 
                textButton={"Ingresar"} 
                classButton={"max-h-9 mt-5"}
            />
        </FormStructure>
    )
}

export default Login;