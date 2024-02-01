import Image from 'next/image';
import React from 'react';

interface Props {
    imageUrl: string;
    label: string;
    width?: number;
    height?: number;
    imageClassname?: string;
    labelClassName?: string;
}

const Icon = ({ imageUrl, label, width = 100, height = 100, imageClassname }: Props) => {
    return (
        <div className="flex items-center mb-6 mr-4 max-w-40">
            <div className="w-20">
                <Image src={imageUrl} alt="Card image" width={width} height={height} className={imageClassname} loading="lazy" />
            </div>
            <div className="w-3/5 font-roboto text-sm pl-2 pr-4 text-principal-180">
                {label}
            </div>
        </div>
    )
}

export default Icon