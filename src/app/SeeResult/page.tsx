'use client'

import { AccordionTest } from "@/components/01-atoms/AccordionTest";

const exampleResults = [
    {
        subject: 'Matemáticas',
        result: '65.2%'
    },
    {
        subject: 'Español',
        result: '55.2%'
    },
    {
        subject: 'Sociales',
        result: '40.2%'
    },
    {
        subject: 'Inglés',
        result: '30.2%'
    },
]

export default function SeeResult() {

    return (
        <section className="my-8 min-h-lvh">
            <section className=" max-w-screen-sm">
                <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2">
                    <div className="flex text-20">
                        <p className="font-semibold text-principal-150 py-1">Grado:&nbsp;</p>
                        <p className="font-medium text-principal-150 bg-principal-350 rounded py-1 px-2">11-2</p>
                    </div>
                    <div className="flex text-20">
                        <p className="font-semibold text-principal-150 py-1">ICFES:&nbsp;</p>
                        <p className="font-medium text-principal-150 bg-principal-350 rounded py-1 px-2">70.25%</p>
                    </div>
                </div>
                <AccordionTest
                    title="Resultados por Materia"
                    classNameTitle="font-semibold"
                    isRemove={false}
                >
                    <div className="px-1 pt-2 pb-5">
                        <div className="grid grid-cols-2 border-b border-b-principal-50 py-1 w-full">
                            <p className="font-semibold">Materia</p>
                            <p className="font-semibold">Resultado</p>
                        </div>
                        {
                            exampleResults.map((result, index) => (
                                <div key={index} className="grid grid-cols-2 border-b border-b-principal-50 py-1.5 w-full">
                                    <p>{result.subject}</p>
                                    <p>{result.result}</p>
                                </div>
                            ))
                        }
                    </div>
                </AccordionTest>
            </section>
        </section>
    )
}