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
                    <p className="font-semibold text-principal-180">
                        Examen:&nbsp;
                        <span className="font-normal text-principal-350">General</span>
                    </p>
                </div>
                <div className="mt-2">
                    <p className="font-semibold text-principal-180">
                        Periodo:&nbsp;
                        <span className="font-normal text-principal-350">2024-II</span>
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="font-semibold text-principal-180 mb-1">
                        Grado:&nbsp;
                    </p>
                    <p className="font-normal text-principal-350">
                        11-2
                    </p>
                </div>
                <div className="mb-2">
                    <p className="font-semibold text-principal-180">
                        Resultado:&nbsp;
                        <span className="font-normal text-principal-350">70.2%</span>
                    </p>
                </div>
                <Link
                    href={"/"}
                    className="font-semibold text-principal-500 text-opacity-80 border-b-[1px] py-0.5 hover:text-principal-500"
                >
                    Ver Más
                </Link>
                <hr className="border-principal-320 mb-2 mt-3" />
                <div className="flex flex-col">
                    <p className="font-semibold text-principal-180 text-15 italic">Fecha de Realización</p>
                    <p className="font-normal text-principal-350 text-15 italic">27/10/2024</p>
                </div>
            </div>
        </div>
    )
}