import { ChangeEvent, ReactNode } from "react"

type OptionsSelect = {
    idOption: string
    value: string
}

type CustomSelectProps = {
    textFirstSelect?: string
    idSelect: string
    label: string
    options: OptionsSelect[]
    handleSeletedOption: (e: ChangeEvent<HTMLSelectElement>) => void
}

const optionsExample: OptionsSelect[] = [
    {
        idOption: '1',
        value: 'Única pregunta'
    },
    {
        idOption: '2',
        value: 'Multiples preguntas'
    },
]

export const CustomSelect = ({
    textFirstSelect = '---- Seleccione una opcion -----',
    idSelect = 'questions',
    label = 'Tipo de pregunta',
    options = optionsExample,
    handleSeletedOption
}: CustomSelectProps) => {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={idSelect}
                className="label"
            >
                {label}
            </label>
            <select
                className="select"
                name={idSelect}
                id={idSelect}
                onChange={handleSeletedOption}
            >
                <option value="">{textFirstSelect}</option>
                {
                    options.map(option => (
                        <option
                            key={option.idOption}
                            value={option.idOption}
                        >
                            {option.value}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}