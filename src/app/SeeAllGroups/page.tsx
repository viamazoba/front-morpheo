'use client'

import { CardGroupDetail } from "@/components/02-molecules/cards/CardGroupDetail"
import { FilterCardGroups } from "@/components/02-molecules/filters/FilterCardGroups"


export default function SeeAllGroups() {

    const arrayExample = ['1', '2', '3', '4', '5', '6', '7']

    return (
        <section className="flex gap-x-6 mx-auto my-8 min-h-lvh max-w-screen-3xl">

            <section className="max-w-64">
                <FilterCardGroups
                    classNameContainer={"bg-principal-150 rounded-12 shadow-2xl px-5 py-4 min-w-64"}
                />
            </section>

            <section className="flex flex-wrap gap-7 w-fit max-w-7xl max-h-fit">
                {
                    arrayExample.map(item => (
                        <CardGroupDetail key={item} />
                    ))
                }
            </section>

        </section>
    )
} 