import { useState } from "react"
import { AddMoreSimbol } from "../01-atoms/AddMoreSimbol"
import { CustomInput } from "../01-atoms/CustomInput"
import { Remove } from "../01-atoms/custom-icons/Remove"

type TArrayStudent = {
    name: string
    email: string
}

export const SetOfInputs = () => {
    const [arrayStudents, setArrayStudents] = useState<TArrayStudent[]>([
        {
            name: '',
            email: ''
        }
    ])

    const handleAddStudent = () => {
        setArrayStudents([
            ...arrayStudents,
            {
                name: '',
                email: ''
            }
        ])
    }

    const handleDeleteStudent = (item: number) => {

        let newStudents = [...arrayStudents]
        newStudents.splice(item, 1)

        setArrayStudents([
            ...newStudents
        ])
    }

    return (
        <div className="flex flex-col items-center w-full">
            {
                arrayStudents.map((student, item) => (
                    <div
                        key={item}
                        className="flex flex-wrap gap-2 md:flex-nowrap justify-between items-center shadow-md border rounded-8 border-principal-50 w-full max-w-[900px] py-5 px-10 mb-4"
                    >
                        <div className="flex items-center justify-center bg-principal-180 rounded-12 w-10 h-10 mt-5">
                            <span
                                className="text-principal-150 text-18 font-bold"
                            >
                                {item + 1}
                            </span>
                        </div>
                        <CustomInput idInput={item.toLocaleString()} labelInput={"Nombre Estudiante"} typeInput={"text"} value={student.name} regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/} />

                        <CustomInput idInput={item.toLocaleString()} labelInput={"Correo Estudiante"} typeInput={"text"} value={student.email} regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/} />

                        <div
                            className="flex justify-center mt-6"
                        >
                            <Remove
                                hoverColor={'#FD536D'}
                                normalColor={'#333333'}
                                onClick={() => handleDeleteStudent(item)}
                            />
                        </div>
                    </div>
                ))
            }
            <AddMoreSimbol text={"Agregar estudiante"} onClick={handleAddStudent} />
        </div>
    )
}