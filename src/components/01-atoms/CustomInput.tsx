import { customInputInterface } from "@/interfaces";
import React, { FC, useState } from "react";


export const CustomInput: FC<customInputInterface> = ({
    idInput,
    classContainer,
    labelInput,
    classLabel,
    typeInput,
    placeholderInput,
    valueRequired,
    classInput,
    onChange,
    value,
    regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    regexMessage
})=>{
    return(
        <div className={`${classContainer}`}>
            <label className={`${classLabel} label`} htmlFor={idInput}>{labelInput}</label>
            <input
                className={`${classInput} ${valueRequired ? 'required' : ''} input`} 
                type={typeInput}
                id={idInput}
                name={labelInput}
                required={valueRequired}
                placeholder={placeholderInput}
                onChange={onChange}
                value={value}
            />
            {   
        
                (!regex.test(value) && value!='') &&
                <p className="text-12 text-principal-500 mt-1 ml-2">{regexMessage}</p>
            }
        </div>
    )
}