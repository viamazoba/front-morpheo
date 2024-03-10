import { SectionWhyInterface } from "@/interfaces";
import React, { FC } from "react";

export const SectionWhy: FC<SectionWhyInterface> = ({
    classNameSection,
    colorText,
    title,
    paragraph
})=>{
    return(
        <section className={`max-w-5xl ${classNameSection}`}>
            <h2 className={`text-20 mb-3 font-bold text-center sm:text-32 ${colorText?colorText:'text-principal-350'}`}>{title}</h2>
            <p className={`text-14 font-light text-center sm:text-15 ${colorText?colorText:'text-principal-800'}`}>
                {paragraph}
            </p>
        </section>
    )
}