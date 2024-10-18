'use client'

import { GroupButtons } from "@/components/02-molecules/GroupButtons";
import { SelectAndInput } from "@/components/02-molecules/SelectAndInput";
import { SetOfInputs } from "@/components/02-molecules/SetOfInputs";

const arrayButtons = [{
    nameButton: 'Guardar',
    typeButton: 'blueTwoButton',
    classButton: '',
},
{
    nameButton: 'Borrar contenido',
    typeButton: 'redButton',
    classButton: '',
},
]

export default function RegisterStudents() {

    return (
        <section>

            <section
                className="flex flex-col gap-y-10 rounded-12 bg-principal-150 shadow-xl px-16 pt-9 pb-11 my-20 mx-auto h-fit w-fit"
            >

                <section className="flex justify-left">
                    <SelectAndInput
                        classNameContainer="max-w-[903px]"
                    />
                </section>
                <section>
                    <SetOfInputs />
                </section>

                <section>
                    <GroupButtons
                        arrayButtons={arrayButtons}
                        classContainer="flex gap-5 mt-5"
                    />
                </section>
            </section>
        </section>
    )
}