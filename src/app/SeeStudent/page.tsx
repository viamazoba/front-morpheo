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

export default function SeeStudent() {
    return (
        <section className="flex flex-col md:flex-row md:justify-center gap-5 mx-3 pt-9 pb-4">
            <section className="max-w-screen-sm">
                <div className="flex justify-between gap-6 bg-principal-350 rounded-4 py-5 px-2">
                    <div className="flex text-20">
                        <p className="font-medium text-principal-150 rounded py-1 px-2">Nombre Examen:</p>
                    </div>
                    <div className="flex text-20">
                        <p className="font-semibold text-principal-150 py-1">ICFES&nbsp;</p>
                    </div>
                </div>

                <div className="flex justify-center gap-6 bg-principal-100 rounded-4 py-3 px-2">
                    <div className="flex text-20 py-0.5">
                        <p className="font-medium text-principal-150 rounded py-1 px-2">Juan Carlos Osorio Rivera</p>
                    </div>
                    <div className="flex text-20 rounded-3 border-principal-150 border px-2 py-0.5">
                        <p className="font-semibold text-principal-150 py-1">Puesto:&nbsp;</p>
                        <p className="font-medium text-principal-150 rounded py-1 px-2">2</p>
                    </div>
                </div>
                <div className="bg-principal-150 pt-2 pb-5">
                    <div className="grid grid-cols-2 border-b border-b-principal-50 py-1 w-full">
                        <p className="font-semibold px-2">Materia</p>
                        <p className="font-semibold px-2">Resultado</p>
                    </div>
                    {
                        exampleResults.map((result, index) => (
                            <div key={index} className="grid grid-cols-2 border-b border-b-principal-50 py-1.5 w-full even:bg-principal-200">
                                <p className="px-2">{result.subject}</p>
                                <p className="px-2">{result.result}</p>
                            </div>
                        ))
                    }
                    <div className="grid grid-cols-2 border-b border-b-principal-50 py-2 w-full bg-principal-350">
                        <p className="font-semibold text-principal-150 px-2">Resultado</p>
                        <p className="font-semibold text-principal-150 px-2">70.25%</p>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-sm">
                <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2">
                    <p className="font-semibold text-20 text-principal-150 py-1">Temas a Mejorar</p>
                </div>
                <p className="bg-principal-200 rounded py-2 px-2">
                    Las preguntas que se muestran a continuación son las que falló el estudiante en las diferentes materias
                </p>
                <div className="px-1 pt-2 pb-1">
                    <AccordionTest
                        title="Preguntas Falladas"
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
                        title="Preguntas con Mayor Tiempo de Desarrollo"
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