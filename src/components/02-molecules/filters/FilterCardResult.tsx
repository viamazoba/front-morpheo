import { CustomSelect } from "@/components/01-atoms/CustomSelect"
import { ChangeEvent, useState } from "react"
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

const optionsSortResults = [
    {
        idOption: '1',
        value: 'Mejor Resultado'
    },
    {
        idOption: '2',
        value: 'Peor Resultado'
    },
    {
        idOption: '3',
        value: 'Más Reciente'
    },
    {
        idOption: '4',
        value: 'Más Antiguo'
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

type FilterCardResultProps = {
    classNameContainer: string
}

export const FilterCardResult = ({
    classNameContainer
}: FilterCardResultProps) => {

    const [filterValues, setFilterValues] = useState({
        typeExam: '',
        grade: '',
        year: '',
        creationYear: '',
        creationMonth: '',
        creationDay: ''
    })

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
                    textFirstSelect="----- Opciones -----"
                    idSelect={filterValues.typeExam}
                    label={"Tipo de examen"}
                    options={optionsExample}
                    handleSeletedOption={handleValues}
                />
            </div>
            <div>
                <CustomSelect
                    textFirstSelect="----- Opciones -----"
                    idSelect={filterValues.year}
                    label={"Grado:"}
                    options={optionsGrades}
                    handleSeletedOption={handleValues}
                />
            </div>
            <div>
                <CustomSelect
                    textFirstSelect="----- Opciones -----"
                    idSelect={filterValues.year}
                    label={"Ordenar por:"}
                    options={optionsSortResults}
                    handleSeletedOption={handleValues}
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