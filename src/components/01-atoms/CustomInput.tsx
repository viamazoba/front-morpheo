import { customInputInterface } from "@/interfaces";
import React, { FC } from "react";


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
    value
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
        </div>
    )
}