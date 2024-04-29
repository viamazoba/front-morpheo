import React, {FC, useState} from 'react'

type CustomAreaTextInterface = {
    labelText: string,
    classContainer?: string
}

export const CustomAreaText: FC<CustomAreaTextInterface> = ({
    labelText = 'Ingrese texto',
    classContainer
})=>{
    const [heightText, setHeightText] = useState('50px')
    const handleTextHeight = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setHeightText(e.target.scrollHeight.toString()+'px')
    }
    return(
        <div className={`${classContainer}`}>
            <label htmlFor="idText" className='label'>{labelText}</label>
            <textarea name="" id="idText" className={`input resize-none overflow-hidden`} style={{height:`${heightText}`}} onChange={handleTextHeight}/>
        </div>
    )
}