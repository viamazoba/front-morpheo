'use client'

import { CustomInput } from '@/components/01-atoms/CustomInput'
import { FormStructure } from '@/components/01-atoms/FormStructure'
import { GeneralButton } from '@/components/01-atoms/GeneralButton'
import { TitleForm } from '@/components/01-atoms/TitleForm'
import React, { useState } from 'react'

const ResetPassword = ()=>{

    const [resetPassword, setResetPassword] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        
        setResetPassword(email)
        
    };
    
    return(
        <FormStructure
            classContainer="max-w-85 min-h-60 pb-7"
            classForm="formResetPassword mt-16 min-h-60"
            onSubmit={()=>{}}
        >
            <TitleForm
                titleText="Restablecer Contraseña"
                paragraph="Ingresa tu correo y presiona aceptar"
                classContainer="mb-8"
            />
            <CustomInput
                idInput="email"
                labelInput="Correo Electrónico" 
                typeInput={"email"}
                placeholderInput="morpheo@ejemplo.com" 
                onChange={handleChange}
                value={resetPassword}
                classLabel="text-14"
                regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                regexMessage="Ingrese un valor válido"
                classContainer="mb-4"                 
            />
            <GeneralButton 
                buttonType={"redButton"} 
                textButton={"Aceptar"} 
                classButton="max-h-9 mt-7"
            />
        </FormStructure>
    )
}

export default ResetPassword