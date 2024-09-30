
const classes = ['Matemáticas', 'Inglés', 'Español']

export const CardDetailExam = () => {

    return (
        <div className="cursor-pointer rounded-8 shadow-xl px-4 py-3 max-w-73">
            <h2>
                ICFES
            </h2>
            <hr className="my-1 border-principal-320" />
            <div>
                <div className="grid grid-cols-2 gap-3">
                    <p className="font-semibold">
                        Grado:&nbsp;
                        <span className="font-normal">9</span>
                    </p>
                    <p className="font-semibold">
                        Periodo:&nbsp;
                        <span className="font-normal">II</span>
                    </p>
                </div>
                <div className="my-2">
                    <p className="font-semibold mb-1">
                        Materias
                    </p>
                    <div className="grid grid-cols-2 gap-x-2 rounded-8 bg-principal-300 px-3 py-2">
                        <ul>
                            {classes.map(item => (
                                <p key={item}>
                                    {item}
                                </p>
                            ))}
                        </ul>
                        <ul>
                            {classes.map(item => (
                                <p key={item}>
                                    {item}
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="font-semibold">
                    Año:&nbsp;
                    <span className="font-normal">2011</span>
                </p>
                <hr className="border-principal-320 my-2" />
                <div className="flex flex-col">
                    <p className="font-semibold text-15">Fecha de creación</p>
                    <p className="font-normal text-15">27/10/2024</p>
                </div>
            </div>
        </div>
    )
}