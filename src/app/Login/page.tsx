'use client'

import React, { useState } from "react";
import { FormStructure } from "../../components/01-atoms/FormStructure";
import { CustomInput } from "@/components/01-atoms/CustomInput";
import { GeneralButton } from "@/components/01-atoms/GeneralButton";
import { LinkText } from "@/components/01-atoms/LinkText";
import { TitleForm } from "@/components/01-atoms/TitleForm";

const Login =()=>{
    const handleSubmit = (e:any)=>{
        e.preventDefault()
    }

    const [loginForm, setLoginForm] = useState({
        email:'',
        password: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const inputName = event.target.id
        
        if(inputName === 'email'){
            setLoginForm({
                ...loginForm,
                email: newValue
            });

        }else{
            setLoginForm({
                ...loginForm,
                password: newValue
            });
        }
        
    };

    return(
        <FormStructure
            classContainer="max-w-85 min-h-98 pb-7"
            classForm="formLogin mt-16"
            onSubmit={()=>{}}
        >
            <TitleForm
                titleText="Iniciar Sesión"
                paragraph="Ingresa tu correo y contraseña para ingresar"
                classContainer="mb-8"
            />
            <CustomInput
                idInput="email"
                labelInput="Correo Electrónico" 
                typeInput={"email"}
                placeholderInput="morpheo@ejemplo.com" 
                onChange={handleChange}
                value={loginForm.email}
                classLabel="text-14"
                regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                regexMessage="Ingrese un valor válido"
                classContainer="mb-4"                 
            />
            <CustomInput
                idInput="password"
                labelInput="Contraseña" 
                typeInput={"password"}
                placeholderInput="********"
                onChange={handleChange}
                value={loginForm.password}
                classLabel="text-14"
                regex={/^(?=(?:.*[a-zA-Z0-9]){3}).{3,}$/}
                regexMessage="Verifique su contraseña"               
            />
            <LinkText
                href="#"
                text="¿Olvidaste tu contraseña?"
            />
            <GeneralButton 
                buttonType={"redButton"} 
                textButton={"Ingresar"} 
                classButton="max-h-9 mt-10"
            />
        </FormStructure>
    )
}

export default Login;