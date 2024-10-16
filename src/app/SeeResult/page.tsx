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
            <section className="max-w-screen-sm">
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
                    classNameTitle="font-semibold text-principal-350"
                    isRemove={false}
                >
                    <div className="px-1 pt-2 pb-5">
                        <div className="grid grid-cols-2 border-b border-b-principal-50 py-1 w-full">
                            <p className="font-semibold">Materia</p>
                            <p className="font-semibold">Resultado</p>
                        </div>
                        {
                            exampleResults.map((result, index) => (
                                <div key={index} className="grid grid-cols-2 border-b border-b-principal-50 py-1.5 w-full even:bg-principal-200">
                                    <p>{result.subject}</p>
                                    <p>{result.result}</p>
                                </div>
                            ))
                        }
                    </div>
                </AccordionTest>
            </section>

            <section className="max-w-screen-sm mt-8">
                <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2">
                    <p className="font-semibold text-20 text-principal-150 py-1">Temas a Mejorar</p>
                </div>
                <p className="bg-principal-200 rounded py-2 px-2">
                    Las preguntas que se muestran a continuación son las que cumplen con la regla de Paretto, o en otras palabras, el 20% de las preguntas entre los estudiantes que causan el 80% del fallo en el examen.
                </p>
                <div className="px-1 pt-2 pb-1">
                    <AccordionTest
                        title="Preguntas con Mayor cantidad de fallos"
                        classNameTitle="font-semibold text-principal-350"
                        isRemove={false}
                    >
                        <div className="px-1 pt-2 pb-5">
                            <div className="grid grid-cols-2 border-b border-b-principal-50 py-1 w-full">
                                <p className="font-semibold">Materia</p>
                                <p className="font-semibold">Descargar</p>
                            </div>
                            {
                                exampleResults.map((result, index) => (
                                    <div key={index} className="grid grid-cols-2 border-b border-b-principal-50 py-1.5 w-full even:bg-principal-200">
                                        <p>{result.subject}</p>
                                        <p
                                            className="text-principal-100 border-b w-fit"
                                        >
                                            Generar PDF
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </AccordionTest>
                </div>

                <div className="px-1 pt-2 pb-5">
                    <AccordionTest
                        title="Preguntas con Mayor Tiempo de Respuesta"
                        classNameTitle="font-semibold text-principal-350"
                        isRemove={false}
                    >
                        <div className="px-1 pt-2 pb-5">
                            <div className="grid grid-cols-2 border-b border-b-principal-50 py-1 w-full">
                                <p className="font-semibold">Materia</p>
                                <p className="font-semibold">Descargar</p>
                            </div>
                            {
                                exampleResults.map((result, index) => (
                                    <div key={index} className="grid grid-cols-2 border-b border-b-principal-50 py-1.5 w-full even:bg-principal-200">
                                        <p>{result.subject}</p>
                                        <p
                                            className="text-principal-100 border-b w-fit"
                                        >
                                            Generar PDF
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </AccordionTest>
                </div>
            </section>
        </section>
    )
}