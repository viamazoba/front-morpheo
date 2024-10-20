import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export const CardGroupDetail = () => {

    const [isTestVisible, setIsTestVisible] = useState(false)
    const [isAssigmentsVisible, setIsAssigmentsVisible] = useState(false)


    const handleVisibleMenus = (menu: string) => {
        if (menu === '1') {
            setIsTestVisible(!isTestVisible)
        } else if (menu === '2') {
            setIsAssigmentsVisible(!isAssigmentsVisible)
        }
    }

    return (
        <div className="bg-principal-150 rounded-8 shadow-xl px-4 py-3 max-w-73 max-h-fit">
            <h2 className="text-principal-350">
                Grupo&nbsp;
                <span>11-2</span>
            </h2>
            <hr className="border-principal-320 mt-1 mb-3" />
            <div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                            Estudiantes&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">23</p>
                    </div>
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-0.5 mb-0.5">
                            Año&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">2024</p>
                    </div>
                </div>
                <div className="my-2 relative">
                    <p className="flex gap-x-3 font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-1 mb-0.5">
                        Test Realizados&nbsp;(0)
                        <ChevronDownIcon
                            className={`text-principal-150 font-semibold border border-principal-150 bg-principal-100  cursor-pointer rounded ml-1 p-0.5 w-6 h-auto ${isTestVisible && 'rotate-180'}`}
                            onClick={() => handleVisibleMenus('1')}
                        />
                    </p>
                    <div className={`bg-principal-250 rounded-2 transition-all ease-in-out ${isTestVisible ? 'opacity-100 py-2 px-1 mt-2' : 'opacity-0 h-0 absolute -z-1'}`}>
                        <table>
                            <thead className="border-b-2 border-b-principal-150">
                                <tr>
                                    <th className="text-left px-1 min-w-32">Examen</th>
                                    <th className="text-left px-1 min-w-32">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-principal-150 last:border-principal-250">
                                    <td className="px-1 pt-1">
                                        ICFES
                                    </td>
                                    <td className="px-1 pt-1">
                                        25/08/2024
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="my-2 relative">
                    <p className="flex gap-x-3 font-semibold text-principal-150 bg-principal-100 rounded-2 px-1.5 py-1 mb-0.5">
                        Test Asignados&nbsp;(1)
                        <ChevronDownIcon
                            className={`text-principal-150 font-semibold border border-principal-150 bg-principal-100  cursor-pointer rounded ml-1 p-0.5 w-6 h-auto  ${isAssigmentsVisible && 'rotate-180'}`}
                            onClick={() => handleVisibleMenus('2')}
                        />
                    </p>
                    <div className={`bg-principal-250 rounded-2 transition-all ease-in-out ${isAssigmentsVisible ? 'opacity-100 py-2 px-1 mt-2' : 'opacity-0 h-0 absolute -z-1'}`}>
                        <table>
                            <thead className="border-b-2 border-b-principal-150">
                                <tr>
                                    <th className="text-left px-1 min-w-32">Examen</th>
                                    <th className="text-left px-1 min-w-32">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-principal-150 last:border-principal-250">
                                    <td className="px-1 pt-1">
                                        ICFES
                                    </td>
                                    <td className="px-1 pt-1">
                                        25/08/2024
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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