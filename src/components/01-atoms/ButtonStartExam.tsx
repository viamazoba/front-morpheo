import { type ButtonStartExamInterface } from "@/interfaces";
import { type FC } from "react";

export const ButtonStartExam: FC<ButtonStartExamInterface> = ({
  buttonText = 'Comenzar examen',
  secondary = false,
  onClick = ()=>{return console.log('Funciona!')}
}) => {
  return (
    <div>
        <button
        className={`flex items-center ${secondary?'min-w-46 justify-end min-h-12 bg-principal-700 pr-6':'min-w-100 min-h-7 sm:min-w-40 sm:min-h-10 bg-principal-180 pr-4'}  rounded-4 py-2 relative`}
        onClick={onClick}
        >
            <div className={`flex flex-col justify-between absolute  ${secondary?'left-6 min-h-10':'left-3.5 sm:left-6 min-h-7 sm:min-h-10'}`}>
                <hr className={`border-dotted bg-principal-150 ${secondary?'h-2 w-[1.5px]':'w-[1px] h-1.5 sm:h-2'}`}/>
                <hr className={`border-dotted bg-principal-150 ${secondary?'h-3 w-[1.5px]':'w-[1px] h-2.5 sm:h-3'}`}/>
                <hr className={`border-dotted bg-principal-150 ${secondary?'h-2 w-[1.5px]':'w-[1px]  h-1.5 sm:h-2'}`}/>
            </div>
            <span className={`font-poppins font-semibold text-principal-150 ${secondary?'text-base pl-10':'pl-6 text-8 sm:text-13 sm:pl-10'}`}>{buttonText}</span>
        </button>
    </div>
  );
};