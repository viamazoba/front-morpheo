import { CustomInput } from "@/components/01-atoms/CustomInput"
import { CustomSelect } from "@/components/01-atoms/CustomSelect"
import { ChangeEvent, useState } from "react"
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { GroupButtons } from "../GroupButtons"

const optionsExample = [
    {
        idOption: '1',
        value: 'ICFES'
    },
    {
        idOption: '2',
        value: 'UNAL'
    },
    {
        idOption: '3',
        value: 'UdeA'
    },
    {
        idOption: '4',
        value: 'General'
    },
]

const optionsGrades = [
    {
        idOption: '9',
        value: '9'
    },
    {
        idOption: '10',
        value: '10'
    },
    {
        idOption: '11',
        value: '11'
    }
]

const arrayButtons = [{
    nameButton: 'Aplicar',
    typeButton: 'blueTwoButton',
    classButton: '',
},
{
    nameButton: 'Limpiar',
    typeButton: 'redButton',
    classButton: '',
},
]

type FilterCardExamProps = {
    classNameContainer: string
}

export const FilterCardExam = ({
    classNameContainer
}: FilterCardExamProps) => {

    const [filterValues, setFilterValues] = useState({
        typeExam: '',
        grade: '',
        year: '',
        creationYear: '',
        creationMonth: '',
        creationDay: ''
    })

    const [advancedFilter, setAdvancedFilter] = useState(false)

    const handleValues = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        /* console.log('Valor enviado: ', e.target.value) */
        setFilterValues({
            ...filterValues,
            [e.target.id]: e.target.value
        })
    }

    return (
        <section className={`flex flex-col gap-y-5 ${classNameContainer}`}>
            <div className="bg-principal-100 rounded-8 py-1 px-1 w-full">
                <h2 className="text-principal-150 text-22 text-center">Filtro Exámenes</h2>
            </div>
            <div>
                <CustomSelect
                    idSelect={filterValues.typeExam}
                    label={"Tipo de examen"}
                    options={optionsExample}
                    handleSeletedOption={handleValues}
                />
            </div>
            <div>
                <CustomSelect
                    idSelect={filterValues.year}
                    label={"Grado:"}
                    options={optionsGrades}
                    handleSeletedOption={handleValues}
                />
            </div>
            <div>
                <CustomInput
                    idInput={"year"}
                    labelInput={"Año Examen: "}
                    typeInput={"number"}
                    value={filterValues.year}
                    regex={/^[0-9]+$/}
                    onChange={handleValues}
                    placeholderInput="2011"
                />
            </div>

            {

                <div className={`flex flex-col transition-all duration-200 ease-in-out transform ${advancedFilter ? 'gap-y-2 opacity-100 scale-100' : 'gap-y-0 opacity-0 scale-95 h-0'}`}>
                    <hr className={`text-principal-50 my-2 ${advancedFilter && 'my-0'}`} />
                    <p className="font-semibold mb-1">Fecha de creación</p>
                    <CustomInput
                        idInput={"creationYear"}
                        labelInput={"Año: "}
                        typeInput={"number"}
                        value={filterValues.creationYear}
                        regex={/^[0-9]+$/}
                        onChange={handleValues}
                        placeholderInput="2022"
                        classContainer={`${!advancedFilter && 'hidden'}`}
                    />
                    <CustomInput
                        idInput={"creationMonth"}
                        labelInput={"Mes: "}
                        typeInput={"number"}
                        value={filterValues.creationMonth}
                        regex={/^[0-9]+$/}
                        onChange={handleValues}
                        placeholderInput="9"
                        classContainer={`${!advancedFilter && 'hidden'}`}
                    />
                    <CustomInput
                        idInput={"creationDay"}
                        labelInput={"Día: "}
                        typeInput={"number"}
                        value={filterValues.creationDay}
                        regex={/^[0-9]+$/}
                        onChange={handleValues}
                        placeholderInput="24"
                        classContainer={`${!advancedFilter && 'hidden'}`}
                    />
                </div>
            }
            <div
                className="flex flex-col items-center cursor-pointer hover:text-principal-100 hover:font-medium"
                onClick={() => setAdvancedFilter(!advancedFilter)}
            >
                {
                    advancedFilter ?
                        <p>Mostrar Menos</p>
                        :
                        <p>Filtro avanzado</p>
                }
                <ChevronDoubleDownIcon
                    className={`my-1 max-w-6 ${advancedFilter && 'rotate-180'}`}
                />
            </div>

            <div>
                <GroupButtons
                    arrayButtons={arrayButtons}
                    classContainer="flex flex-col gap-y-1.5 mt-2"
                />
            </div>

        </section>
    )
}