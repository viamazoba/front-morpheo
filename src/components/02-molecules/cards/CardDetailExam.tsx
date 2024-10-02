
const classes = ['Matemáticas', 'Inglés', 'Español']

export const CardDetailExam = () => {

    return (
        <div className="bg-principal-150 cursor-pointer rounded-8 shadow-xl px-4 py-3 max-w-73 max-h-fit hover:translate-x-1 hover:translate-y-1 hover:transition-transform">
            <h2 className="text-principal-350">
                ICFES
            </h2>
            <hr className="border-principal-320 mt-1 mb-3" />
            <div>
                <div className="grid grid-cols-2 gap-3">
                    <p className="font-semibold text-principal-180">
                        Grado:&nbsp;
                        <span className="font-normal text-principal-350">9</span>
                    </p>
                    <p className="font-semibold text-principal-180">
                        Periodo:&nbsp;
                        <span className="font-normal text-principal-350">II</span>
                    </p>
                </div>
                <div className="my-2">
                    <p className="font-semibold text-principal-180 mb-1">
                        Materias
                    </p>
                    <div className="grid grid-cols-2 gap-x-2 rounded-8 bg-principal-300 px-3 py-2">
                        <ul>
                            {classes.map((item, index) => {
                                if (index % 2 == 0) {
                                    return <p key={item}>
                                        {item}
                                    </p>
                                }
                            })}
                        </ul>
                        <ul>
                            {classes.map((item, index) => {
                                if (index % 2 == 1) {
                                    return <p key={item}>
                                        {item}
                                    </p>
                                }
                            })}
                        </ul>
                    </div>
                </div>
                <p className="font-semibold text-principal-180">
                    Año:&nbsp;
                    <span className="font-normal text-principal-350">2011</span>
                </p>
                <hr className="border-principal-320 mb-2 mt-3" />
                <div className="flex flex-col">
                    <p className="font-semibold text-principal-180 text-15 italic">Fecha de creación</p>
                    <p className="font-normal text-principal-350 text-15 italic">27/10/2024</p>
                </div>
            </div>
        </div>
    )
}