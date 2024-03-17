/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect} from "react"
import { usePathname } from 'next/navigation'

export const DisableComponents = (Component:any)=>{
    const Disable = (props:any)=>{
        
        const path = usePathname();
        const disableRoutes = ['/Login']

        if(disableRoutes.includes(path)){
            return null
        }
        return <Component {...props}/>

    }
    
    return Disable
}

export default DisableComponents