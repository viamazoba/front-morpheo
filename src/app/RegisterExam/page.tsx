'use client'

import { CustomInput } from "@/components/01-atoms/CustomInput"
import { CustomSelect } from "@/components/01-atoms/CustomSelect"
import { FormStructure } from "@/components/01-atoms/FormStructure"
import { TitleForm } from "@/components/01-atoms/TitleForm"
import { GroupButtons } from "@/components/02-molecules/GroupButtons"
import { ChangeEvent, FormEvent, useState } from "react"


export default function RegisterExam() {
    const [showMenu, setShowMenu] = useState('0')
    const [subjects, setSubjects] = useState(['Matemáticas', 'Español', 'Ciencias Naturales', 'Sociales', 'Inglés'])

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Se ha guardado la respuesta')
    }

    const handleSeletedOption = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log('Opción seleccionada', e.target.value)

        if (e.target.id === 'selectTypeExam') {
            if (e.target.value === 'ICFES' || e.target.value === 'UNAL') {
                setShowMenu('1')
                setSubjects(['Matemáticas', 'Español', 'Ciencias Naturales', 'Sociales', 'Inglés'])
            } else if (e.target.value === 'UdeA') {
                setShowMenu('2')
                setSubjects(['Razonamiento', 'Lectura'])
            } else if (e.target.value === 'General') {
                setShowMenu('3')
            } else {
                setShowMenu('0')
            }
        }
    }

    return (
        <section>
            <FormStructure
                classFatherContainer="h-[calc(100vh-230px)] pb-2"
                classContainer="max-w-96 pb-7 relative"
                classForm="formResetPassword mt-16"
                onSubmit={handleOnSubmit}
            >

                <TitleForm
                    titleText="Formulario Examen"
                    paragraph="Ingrese la información referente al tipo de examen y las materias respectivas:"
                    classContainer="mb-8"
                />

                <div className="grid grid-cols-2 gap-5 my-5">
                    <CustomSelect
                        textFirstSelect="-------"
                        idSelect={'selectTypeExam'}
                        label={'Tipo de Examen'}
                        options={[
                            {
                                idOption: 'ICFES',
                                value: 'ICFES'
                            },
                            {
                                idOption: 'UNAL',
                                value: 'UNAL'
                            },
                            {
                                idOption: 'UdeA',
                                value: 'UdeA'
                            },
                            {
                                idOption: 'General',
                                value: 'General'
                            }
                        ]}
                        handleSeletedOption={handleSeletedOption}
                    />

                    <CustomSelect
                        textFirstSelect="-------"
                        idSelect={'selectGroup'}
                        label={'Seleccione Grupo'}
                        options={[
                            {
                                idOption: '1',
                                value: '9'
                            },
                            {
                                idOption: '2',
                                value: '10'
                            },
                            {
                                idOption: '3',
                                value: '11'
                            }
                        ]}
                        handleSeletedOption={handleSeletedOption}
                    />
                </div>


                <div className={` transition-all ease-in-out delay-150 ${(showMenu === '1' || showMenu === '2') ? 'opacity-100' : 'opacity-0 absolute -z-1'}`}>
                    <div className="grid grid-cols-2 gap-5 mb-5 mt-0">

                        <CustomInput
                            idInput={"ano"}
                            labelInput={"Año del examen"}
                            typeInput={"number"}
                            classContainer="my-1"
                            value={""}
                            regex={/^(201[5-9]|202[0-5])$/}
                        />

                        <CustomSelect
                            textFirstSelect="-------"
                            idSelect={'selectPeriod'}
                            label={'Periodo examen'}
                            options={[
                                {
                                    idOption: '1',
                                    value: 'I'
                                },
                                {
                                    idOption: '2',
                                    value: 'II'
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
                                subjects.filter((_, index) => index % 2 === 0).map(subject => (
                                    <label
                                        key={subject}
                                        className="cursor-pointer hover:font-semibold hover:px-1 rounded py-0.5 px-2"
                                    >
                                        <input type="checkbox" className="check-button" /> {subject}
                                    </label>
                                ))
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                subjects.filter((_, index) => index % 2 != 0).map(subject => (
                                    <label
                                        key={subject}
                                        className="cursor-pointer hover:font-semibold hover:px-1 rounded w-full py-0.5 px-2"
                                    >
                                        <input type="checkbox" className="check-button" /> {subject}
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                </div>



                <GroupButtons
                    classContainer="px-3 mt-8 max-h-18 md:max-h-12 sm:flex sm:justify-center w-full sm:px-8"
                    arrayButtons={[
                        {
                            nameButton: 'Aceptar',
                            typeButton: 'blueTwoButton',
                            classButton: 'mb-1 md:max-w-96 sm:mb-0 sm:mx-1',
                            type: 'submit'
                        },
                        {
                            nameButton: 'Cancelar',
                            typeButton: 'redButton',
                            classButton: 'md:max-w-96 sm:mx-1',
                            onCLick: () => { }
                        }
                    ]}
                />
            </FormStructure>
        </section>
    )
}