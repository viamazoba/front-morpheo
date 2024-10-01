import { CustomInput } from "@/components/01-atoms/CustomInput"
import { CustomSelect } from "@/components/01-atoms/CustomSelect"
import { ChangeEvent, useState } from "react"

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

export const FilterCardExam = () => {

    const [filterValues, setFilterValues] = useState({
        typeExam: '',
        grade: '',
        year: ''
    })

    const handleValues = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        console.log('Valor enviado: ', e.target.value)
        setFilterValues({
            ...filterValues,
            [e.target.id]: e.target.value
        })
    }

    return (
        <section>
            <div>
                <CustomSelect idSelect={filterValues.typeExam} label={"Tipo de examen"} options={optionsExample} handleSeletedOption={handleValues} />
            </div>
            <div>
                <CustomInput
                    idInput={"grade"}
                    labelInput={"Grado: "}
                    typeInput={"number"}
                    value={filterValues.grade}
                    regex={/^[0-9]+$/}
                    onChange={handleValues}
                />
            </div>
            <div>
                <CustomInput
                    idInput={"year"}
                    labelInput={"Año: "}
                    typeInput={"number"}
                    value={filterValues.year}
                    regex={/^[0-9]+$/}
                    onChange={handleValues}
                />
            </div>
            <div>
                Fecha
            </div>
            <div>
                Fecha creación
            </div>
        </section>
    )
}