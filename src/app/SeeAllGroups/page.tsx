'use client'
import { AccordionTest } from "@/components/01-atoms/AccordionTest";

const exampleGroups = [
    {
        grade: '10',
        reference: '1',
        students: [
            {
                name: 'Carlos Andrés Solarte Jaramillo',
                correo: 'carlos125@gmail.com'
            },
            {
                name: 'Camila Ossa Villa',
                correo: 'cmylo200@gmail.com'
            },
            {
                name: 'Carlos Andrés Solarte Jaramillo',
                correo: 'carlos125@gmail.com'
            },
            {
                name: 'Camila Ossa Villa',
                correo: 'cmylo200@gmail.com'
            },
        ]
    },
    {
        grade: '11',
        reference: '2',
        students: [
            {
                name: 'Esteban Estupiñan De la OZ',
                correo: 'estebann125@gmail.com'
            },
            {
                name: 'Samantha Barrera Casas',
                correo: 'sara230@gmail.com'
            },
            {
                name: 'Carlos Andrés Solarte Jaramillo',
                correo: 'carlos125@gmail.com'
            },
            {
                name: 'Camila Ossa Villa',
                correo: 'cmylo200@gmail.com'
            },
        ]
    },
]

export default function SeeAllGroups() {

    return (
        <section className="flex flex-col items-center min-h-lvh">
            <div className="flex flex-col gap-y-3 md:flex-nowrap justify-between items-center  w-full max-w-[900px] py-5 px-10 mb-4">
                {
                    exampleGroups.map((group, index) => (
                        <AccordionTest
                            key={index}
                            classNameContainer="shadow-md w-full"
                            nameAccordion={'Grupo: ' + group.grade + '-' + group.reference}
                        >
                            {
                                group.students.map((student, index) => (
                                    <div
                                        key={student.correo}
                                        className="flex justify-center items-center gap-x-4 border rounded-8 border-principal-50 mb-2 w-full min-h-10 hover:bg-principal-50 relative"
                                    >
                                        <div
                                            className="flex items-center justify-center bg-principal-180 rounded-8 w-10 h-10 absolute left-0"
                                        >
                                            <span
                                                className="text-principal-150 text-18 font-bold"
                                            >
                                                {index + 1}
                                            </span>
                                        </div>
                                        <p>{student.name}</p>
                                        <p>{student.correo}</p>
                                    </div>
                                ))
                            }
                        </AccordionTest>
                    ))
                }
            </div>
        </section>
    )
}