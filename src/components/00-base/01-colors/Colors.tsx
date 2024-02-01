import React from 'react';

interface Props {
    nameColor: string;
    color: string;
    // width?: number;
    // height?: number;
    // imageClassname?: string;
    // labelClassName?: string;
}

 export const Colors = ({ nameColor, color }: Props) => {
    return (
        <div className="flex items-center mb-6 mr-4 max-w-40">
            <div className={`w-20 h-20 bg-principal-320`}/>
            <div className="w-3/5 font-poppins text-sm pl-2 pr-4 text-principal-180">
                <p>{nameColor}</p>
                <p>{color}</p>
            </div>
        </div>
    )
}