
type OptionsSelect = {
    idOption: string
    value: string
}

type CustomSelectProps = {
    idSelect: string
    label: string
    options: OptionsSelect[]
}

const optionsExample:OptionsSelect[]  = [
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
    idSelect='questions',
    label='Tipo de pregunta',
    options = optionsExample
}: CustomSelectProps) => {
    return(
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
            >
                <option value="">---- &nbsp;&nbsp;Seleccione una opcion&nbsp;&nbsp;-----</option>
                {
                    options.map(option =>(
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