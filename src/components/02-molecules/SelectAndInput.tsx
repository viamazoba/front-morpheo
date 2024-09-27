import { CustomInput } from "../01-atoms/CustomInput"
import { CustomSelect } from "../01-atoms/CustomSelect"


const refGrades = [
    {
        idOption: '1',
        value: '1'
    },
    {
        idOption: '2',
        value: '2'
    },
    {
        idOption: '3',
        value: '3'
    },
    {
        idOption: '4',
        value: '4'
    }
]

type SelectAndInputProps = {
    classNameContainer?: string
}

export const SelectAndInput = ({
    classNameContainer
}: SelectAndInputProps) => {
    return (
        <section
            className={`w-full max-w-xl ${classNameContainer}`}
        >
            <h2>
                Inscripción de grupos
            </h2>
            <p
                className="mt-2"
            >
                Por favor seleccione el grado y la referencia del grupo:
            </p>

            <div
                className="flex flex-wrap justify-between items-center gap-5 mt-8 w-full max-w-xl"
            >
                <div
                    className="mt-1.5"
                >
                    <CustomInput idInput={"4"} labelInput={"Ingrese el grado:"} typeInput={"number"} value={""} regex={/^(6|7|8|9|10|11)$/}
                    />
                </div>
                <div>
                    <CustomSelect idSelect={"5"} label={"Ingrese la referencia del grupo:"} options={refGrades} handleSeletedOption={() => console.log('Seleccionaste una opción')} />
                </div>
            </div>
        </section>
    )
}