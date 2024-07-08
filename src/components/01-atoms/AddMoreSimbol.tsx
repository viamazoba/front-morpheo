import { AddMore } from "./custom-icons/AddMore"

type AddMoreSimbolProps = {
    text: string
    onClick: ()=> void
}

export const AddMoreSimbol = ({
    text='Anadir más preguntas',
    onClick
}: AddMoreSimbolProps)=> {
    return(
        <div className="flex justify-center w-full mt-5">
            <div className="group flex flex-col cursor-pointer items-center rounded w-fit py-1">
                <AddMore
                    classSvg="w-14 h-14 p-0.5"
                    onClick={onClick}
                />
                <p 
                    className="text-14 text-principal-350 text-opacity-90 cursor-pointer group-hover:text-principal-350 group-hover:font-semibold"
                    onClick={onClick}
                >
                    {text}
                </p>
            </div>
        </div>
    )
}