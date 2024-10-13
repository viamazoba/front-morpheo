'use client'
import { AccordionTest } from "@/components/01-atoms/AccordionTest";

const exampleGroup = {
    grade: '10',
    reference: '1',
    year: '2024',
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
}

export default function AssociateExam() {

    return (
        <section className="flex flex-col items-center min-h-lvh">
            Aquí vas a asociar examenes y grupos
        </section>
    )
}