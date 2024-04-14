import React, {useState} from 'react'

export const CustomAreaText = ()=>{
    const [heightText, setHeightText] = useState('50px')
    const handleTextHeight = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setHeightText(e.target.scrollHeight.toString()+'px')
    }
    return(
        <div>
            <label htmlFor="idText" className='label'>Ingrese texto</label>
            <textarea name="" id="idText" className={`input resize-none overflow-hidden`} style={{height:`${heightText}`}} onChange={handleTextHeight}/>
        </div>
    )
}