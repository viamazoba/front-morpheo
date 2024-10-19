import { CardUserProfile } from "@/components/02-molecules/user-profile/CardUserProfile";


const examplePendingTest = [
    {
        id: '1',
        name: 'ICFES',
        dateAssigment: '20/04/2024'
    },
    {
        id: '2',
        name: 'ICFES',
        dateAssigment: '12/05/2024'
    },
    {
        id: '3',
        name: 'ICFES',
        dateAssigment: '21/08/2024'
    }
]

const exampleResultTest = [
    {
        id: '1',
        name: 'ICFES',
        result: '50,23%',
        position: '4'
    },
    {
        id: '2',
        name: 'ICFES',
        result: '60,5%',
        position: '3'
    },
]

export default function StudentProfile() {

    return (
        <section className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 my-8 mx-5">
            <CardUserProfile />

            <section className="flex flex-wrap justify-center items-center gap-4 max-w-screen-sm w-fit">

                <div className="shadow-xl h-fit max-w-screen-sm">
                    <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2">
                        <div className="flex text-20">
                            <p className="font-medium text-principal-150 rounded py-1 px-2">Examenes Pendientes</p>
                        </div>
                    </div>
                    <div className="bg-principal-150 pt-2 pb-5">
                        <div className="grid grid-cols-3 border-b border-b-principal-50 py-1 w-full">
                            <p className="font-semibold px-2">Nombre Examen</p>
                            <p className="font-semibold px-2">Acción</p>
                            <p className="font-semibold px-2">Fecha Publicación</p>
                        </div>
                        {
                            examplePendingTest.map((pendingTest, index) => (
                                <div key={index} className="grid grid-cols-3 border-b border-b-principal-50 py-1.5 w-full even:bg-principal-200">
                                    <p className="px-2">{pendingTest.name}</p>
                                    <p className="text-principal-180 cursor-pointer border-b px-2 w-fit">Realizar Examen</p>
                                    <p className="px-2">{pendingTest.dateAssigment}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="shadow-xl h-fit">
                    <div className="flex justify-between gap-6 bg-principal-100 rounded-4 py-5 px-2">
                        <div className="flex text-20">
                            <p className="font-medium text-principal-150 rounded py-1 px-2">Resultados</p>
                        </div>
                    </div>
                    <div className="bg-principal-150 pt-2 pb-5">
                        <div className="grid grid-cols-4 border-b border-b-principal-50 py-1 w-full">
                            <p className="font-semibold px-2">Nombre Examen</p>
                            <p className="font-semibold px-2">Resultado</p>
                            <p className="font-semibold px-2">Puesto</p>
                            <p></p>
                        </div>
                        {
                            exampleResultTest.map((resultTest, index) => (
                                <div key={index} className="grid grid-cols-4 border-b border-b-principal-50 py-1.5 w-full even:bg-principal-200">
                                    <p className="px-2">{resultTest.name}</p>
                                    <p className="px-2">{resultTest.result}</p>
                                    <p className="px-2">{resultTest.position}</p>
                                    <p className="text-principal-180 cursor-pointer border-b px-2 w-fit">Ver Informe</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </section>
    )
}