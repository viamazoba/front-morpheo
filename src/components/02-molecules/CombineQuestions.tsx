import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { FormQuestions } from "./FormQuestions"
import { FormQuestionsText } from "./FormQuestionsText"
// import { AddMoreSimbol } from "../01-atoms/AddMoreSimbol"


// WARN: Terminar esta parte
// Necesitas acoplar esta parte con ModalQuestions
// O genera el AddMoreSimbol y acoplas el modal con las tabs
export const CombineQuestions = ()=> {
    const [questions, setQuestions] = useState([{
        id: uuidv4(),
        typeQuestion: 'normal'
    }])

    return(
        <div>
            {
                questions.map(question => (
                    <div key={question.id}>
                        {
                            question.typeQuestion === 'normal' ?
                            <FormQuestions />
                            :
                            <FormQuestionsText />

                        }
                    </div>
                ))
            }
            {/* <AddMoreSimbol 
                text="Añadir pregunta"
                onClick={}
            /> */}
        </div>
    )
}
{/* <FormQuestions /> */}
{/* <FormQuestionsText /> */}