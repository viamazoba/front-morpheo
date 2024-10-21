import Link from "next/link"
import { useState } from "react"

const classes = ['Matemáticas', 'Inglés', 'Español']

export const CardDetailExam = () => {

    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div className="bg-principal-150 rounded-8 shadow-xl px-4 py-3 max-w-73 max-h-fit">
            <h2 className="text-principal-350">
                ICFES
            </h2>
            <hr className="border-principal-320 mt-1 mb-3" />
            <div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                        <Link
                            href={"/"}
                            className="font-semibold text-principal-100 rounded bg-principal-150 border border-principal-100 py-0.5 px-1 hover:text-principal-500 hover:border-principal-500"
                        >
                            Ver Examen
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={"/"}
                            className="font-semibold text-principal-100 rounded bg-principal-150 border border-principal-100 py-0.5 px-1 hover:text-principal-500 hover:border-principal-500"
                        >
                            Editar Examen
                        </Link>

                    </div>
                </div>
                <div className="mb-3">
                    <p className="font-semibold text-principal-100 cursor-pointer rounded bg-principal-150 border border-principal-100 py-0.5 px-1 hover:text-principal-500 hover:border-principal-500">Inscribir Grupo</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                            Grado&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">9</p>
                    </div>
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                            Periodo&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">II</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                        Tiempo Estimado&nbsp;
                    </p>
                    <p className="font-normal text-principal-350">2h:30min</p>
                </div>
                <div
                    className="my-3"
                    onClick={handleShowMore}
                >
                    <p
                        className="font-semibold text-principal-100 cursor-pointer rounded bg-principal-150 border border-principal-100 py-0.5 px-1 hover:text-principal-500 hover:border-principal-500"
                    >
                        {showMore ? 'Mostrar Menos' : 'Ver Más'}
                    </p>
                </div>
                <div className={`transition-all ease-in-out delay-100 ${showMore ? 'opacity-100' : 'opacity-0 h-0'}`}>
                    <div className="my-2">
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                            Materias
                        </p>
                        <div className="grid grid-cols-2 gap-x-2 rounded-8 bg-principal-350 bg-opacity-90 px-3 py-2">
                            <ul>
                                {classes.map((item, index) => {
                                    if (index % 2 == 0) {
                                        return <p className="font-medium text-principal-150" key={item}>
                                            {item}
                                        </p>
                                    }
                                })}
                            </ul>
                            <ul>
                                {classes.map((item, index) => {
                                    if (index % 2 == 1) {
                                        return <p className="font-medium text-principal-150" key={item}>
                                            {item}
                                        </p>
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                            Año&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">2011</p>
                    </div>
                </div>

                <hr className="border-principal-800 mt-2 mb-1" />
                <div className="bg-principal-800 mb-2 h-1" />
                <div className="flex flex-col">
                    <p className="font-semibold text-principal-100 text-15 italic">Fecha de creación</p>
                    <p className="font-normal text-principal-350 text-15 italic">27/10/2024</p>
                </div>
            </div>
        </div>
    )
}