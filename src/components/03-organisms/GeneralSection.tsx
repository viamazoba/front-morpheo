import React, { FC } from "react";
import { SectionWhy } from "../02-molecules/SectionWhy";
import { GeneralSectionInterface } from "@/interfaces";

export const GeneralSection: FC<GeneralSectionInterface> = ({
    classSection,
    classBlockText,
    colorText,
    title,
    paragraph,
    classComponent,
    renderItem,
    items
})=>{
    return(
        <section className={`${classSection}`}>
            <SectionWhy
                classNameSection={classBlockText}
                colorText={colorText}
                title={title}
                paragraph={paragraph}
            />
            <div className={`${classComponent}`}>
                {React.cloneElement(renderItem, { ...items })}
            </div>
        </section>
    )
}