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

const exampleStudents = [
    {
        id: '1',
        name: 'Juan Carlos Arboleda Castro',
        result: '78,94%',
        position: '1'
    },
    {
        id: '2',
        name: 'Andrés Camilo Loaiza Clement',
        result: '74,52%',
        position: '2'
    },
    {
        id: '3',
        name: 'Andrea Paola Jaramillo Zapata',
        result: '70,05%',
        position: '3'
    },
]

export default function SeeResult() {

    return (
        <section className="flex flex-col lg:flex-row lg:justify-center gap-5 my-8 mx-3">
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

                <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2 mt-8">
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

            <section className="max-w-screen-md w-full">
                <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2">
                    <p className="font-semibold text-20 text-principal-150 py-1">Resultado por Estudiante</p>
                </div>
                <div className="bg-principal-150 pt-2 pb-5">
                    <div className="flex justify-between border-b border-b-principal-50 py-2 px-2  w-full">
                        <p className="font-semibold w-85">Estudiante</p>
                        <p className="font-semibold px-1">Puntaje</p>
                        <p className="font-semibold px-1">Puesto</p>
                        <p className="font-semibold px-1">Informe</p>
                    </div>
                    {
                        exampleStudents.map((student, index) => (
                            <div key={index} className="flex justify-between border-b border-b-principal-50 py-1.5 w-full px-2 even:bg-principal-200">
                                <p className="w-[345px]">{student.name}</p>
                                <p className="px-1">{student.result}</p>
                                <p className="px-1">{student.position}</p>
                                <p
                                    className="text-principal-100 border-b w-fit pX-1"
                                >
                                    Ver Más
                                </p>
                            </div>
                        ))
                    }
                </div>

            </section>
        </section>
    )
}