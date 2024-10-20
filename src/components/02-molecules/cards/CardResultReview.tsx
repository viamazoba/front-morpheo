import Link from "next/link"


export const CardResultReview = () => {

    return (
        <div className="bg-principal-150 rounded-8 shadow-xl px-4 py-3 max-w-73 max-h-fit">
            <h2 className="text-principal-350">
                Resumen
            </h2>
            <hr className="border-principal-320 mt-1 mb-3" />
            <div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-l-2 px-1.5 py-0.5  mb-0.5">
                            Examen&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">General</p>
                    </div>
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-l-2 px-1.5 py-0.5  mb-0.5">
                            Periodo&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">2024-II</p>
                    </div>
                </div>
                <div className="my-2">
                    <p className="font-semibold text-principal-150 bg-principal-100 rounded-l-2 px-1.5 py-0.5  mb-0.5">
                        Grado&nbsp;
                    </p>
                    <p className="font-normal text-principal-350">
                        11-2
                    </p>
                </div>
                <div className="mb-2">
                    <p className="font-semibold text-principal-150 bg-principal-100 rounded-l-2 px-1.5 py-0.5  mb-0.5">
                        Resultado&nbsp;
                    </p>
                    <p className="font-normal text-principal-350">70.2%</p>
                </div>
                <Link
                    href={"/"}
                    className="font-semibold text-principal-100 rounded bg-principal-150 border border-principal-100 py-0.5 px-1 hover:text-principal-500"
                >
                    Ver Más
                </Link>
                <hr className="border-principal-800 mt-2 mb-1" />
                <div className="bg-principal-800 mb-2 h-1" />
                <div className="flex flex-col">
                    <p className="font-semibold text-principal-100 text-15 italic">Fecha de Realización</p>
                    <p className="font-normal text-principal-350 text-15 italic">27/10/2024</p>
                </div>
            </div>
        </div>
    )
}