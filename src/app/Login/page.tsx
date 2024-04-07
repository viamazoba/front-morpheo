'use client'

import React, { useState } from "react";
import { FormStructure } from "../../components/01-atoms/FormStructure";
import { CustomInput } from "@/components/01-atoms/CustomInput";
import { GeneralButton } from "@/components/01-atoms/GeneralButton";

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
            classContainer="max-w-85 h-96"
            classForm="grid grid-rows-3 gap-y-7 mt-12"
            onSubmit={()=>{}}
        >
            <CustomInput
                idInput="email"
                labelInput="Correo Electrónico" 
                typeInput={"email"}
                placeholderInput="morpheo@ejemplo.com" 
                onChange={handleChange}
                value={loginForm.email}
                regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                regexMessage="Ingrese un valor válido"                 
            />
            <CustomInput
                idInput="password"
                labelInput="Contraseña" 
                typeInput={"password"}
                placeholderInput="********"
                onChange={handleChange}
                value={loginForm.password}
                regex={/^(?=(?:.*[a-zA-Z0-9]){3}).{3,}$/}
                regexMessage="Verifique su contraseña"               
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