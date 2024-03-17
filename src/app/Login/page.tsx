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
            classContainer=""
            onSubmit={()=>{}}
        >
            <CustomInput
                idInput="email"
                labelInput="Correo" 
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
                classButton={""}
            />
        </FormStructure>
    )
}

export default Login;