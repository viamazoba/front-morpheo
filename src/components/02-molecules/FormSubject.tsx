import { ChangeEvent, FormEvent } from "react"
import { FormStructure } from "../01-atoms/FormStructure"
import { TitleForm } from "../01-atoms/TitleForm"
import { GroupButtons } from "./GroupButtons"
import { CustomSelect } from "../01-atoms/CustomSelect"
import { CustomInput } from "../01-atoms/CustomInput"

export function FormSubject() {
    const topics = ['Matemáticas', 'Español', 'Ciencias Naturales', 'Sociales', 'Inglés']

    const handleOnSubmit = (e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        console.log('Se ha guardado la respuesta')
    }

    const handleSeletedOption = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log('Opción seleccionada', e.target.id)
    }

    return(
        <section>
            <FormStructure
                classContainer="max-w-85 min-h-30 pb-7"
                classForm="formResetPassword mt-16 min-h-30"
                onSubmit={handleOnSubmit}
            >

                <TitleForm
                    titleText="Formulario Examen"
                    paragraph="Ingrese la información referente al tipo de examen y las materias respectivas:"
                    classContainer="mb-8"
                />

                <CustomSelect
                    idSelect={'selectTypeExam'}
                    label={'Tipo de Examen'}
                    options={[
                        {
                            idOption:'1',
                            value:'ICFES'
                        },
                        {
                            idOption:'2',
                            value:'UNAL'
                        },
                        {
                            idOption:'3',
                            value:'UdeA'
                        }
                    ]}
                    handleSeletedOption={handleSeletedOption}
                />

                <div className="grid grid-cols-2 gap-5 my-5">

                    <CustomInput 
                        idInput={"ano"} 
                        labelInput={"Año del examen"} 
                        typeInput={"number"}
                        classContainer="my-1"
                        value={""} 
                        regex={/^(201[5-9]|202[0-5])$/}                
                    />

                    <CustomSelect
                        idSelect={'selectPeriod'}
                        label={'Periodo examen'}
                        options={[
                            {
                                idOption:'1',
                                value:'I'
                            },
                            {
                                idOption:'2',
                                value:'II'
                            }
                        ]}
                        handleSeletedOption={handleSeletedOption}
                    />

                </div>

                <div className="mb-2">
                    <p className="label">
                        Seleccione las materias
                    </p>
                </div>
                <div className="flex border gap-5 border-principal-400 rounded py-2">
                    <div className="flex flex-col gap-2">
                        {
                            topics.filter((_, index)=> index %2 === 0).map(topic => (
                                <label 
                                    key={topic}
                                    className="cursor-pointer hover:font-semibold hover:px-1 rounded py-0.5 px-2"
                                >
                                    <input type="checkbox" className="check-button" /> {topic}
                                </label>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        {
                            topics.filter((_, index)=> index %2 !=0).map(topic => (
                                <label 
                                    key={topic}
                                    className="cursor-pointer hover:font-semibold hover:px-1 rounded w-full py-0.5 px-2"
                                >
                                    <input type="checkbox" className="check-button" /> {topic}
                                </label>
                            ))
                        }
                    </div>
                </div>

                <GroupButtons
                    classContainer="px-3 mt-8 max-h-18 md:max-h-12 sm:flex sm:justify-center w-full sm:px-8" 
                    arrayButtons={[
                        {
                            nameButton:'Aceptar',
                            typeButton:'blueTwoButton',
                            classButton: 'mb-1 md:max-w-96 sm:mb-0 sm:mx-1',
                            type: 'submit'
                        },
                        {
                            nameButton:'Cancelar',
                            typeButton:'redButton',
                            classButton: 'md:max-w-96 sm:mx-1',
                            onCLick: ()=>{} 
                        }
                    ]}
                />
            </FormStructure>
        </section>
    )
}