import { ChangeEvent, useState } from "react";

const data = [
    {
        id: '1',
        textRadioButton: 'A'
    },
    {
        id: '2',
        textRadioButton: 'B'
    },
    {
        id: '3',
        textRadioButton: 'C'
    },
    {
        id: '4',
        textRadioButton: 'D'
    }
]

type DataButtons = {
    id: string
    textRadioButton: string
}

type RadioButtonsProps = {
    classContainer?: string
    dataButtons?: DataButtons[]
}

export const RadioButtons = ({
    dataButtons = data,
    classContainer
}: RadioButtonsProps) => {

    // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState('');

  // Manejador de cambio para los radio buttons
  const handleOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

    return(
        <div className={`border border-principal-400 rounded px-4 py-3 max-w-72 ${classContainer}`}>
            <h1>Seleccione la Respuesta Correcta:</h1>
            <form className="flex flex-wrap justify-between py-3 w-full max-w-50">
                {
                    dataButtons.map((button)=>(
                    <div key={button.id} className="flex items-center text-center">
                        <label htmlFor={button.id} className="flex flex-col items-center cursor-pointer bg-principal-190 hover:bg-principal-190 hover:translate-x-0.5 hover:translate-y-0.5 hover:transition bg-opacity-50 rounded  px-2 py-1.5  mx-2 w-8">
                            <input
                                type="radio"
                                id={button.id}
                                name={button.textRadioButton}
                                value={button.textRadioButton}
                                checked={selectedOption === button.textRadioButton}
                                onChange={handleOptionChange}
                                />
                            {button.textRadioButton}
                        </label>
                    </div>
                    ))
                }
                {/* <div>
                    <input
                        type="radio"
                        id="option2"
                        name="options"
                        value="Option 2"
                        checked={selectedOption === 'Option 2'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option2">Opción 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option3"
                        name="options"
                        value="Option 3"
                        checked={selectedOption === 'Option 3'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option3">Opción 3</label>
                </div> */}
            </form>
        </div>
    )
}