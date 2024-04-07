import { LinkTextInterface } from "@/interfaces";
import Link from "next/link";
import React, { FC } from "react";

export const LinkText: FC<LinkTextInterface> = ({
    href,
    text,
    classNameContainer,
    classNameText
})=>{
    return(
        <div className={`${classNameContainer} w-full text-right`}>
            <Link
                href={href}
                className={`${classNameText} text-11 text-principal-320 text-opacity-70 hover:text-principal-100 hover:underline`}
            >
                {text}
            </Link>
        </div>
    )
}