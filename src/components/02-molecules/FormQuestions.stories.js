import { FormQuestions as Questions } from './FormQuestions';

const meta = {
    title: 'Atoms/FormQuestions',

    component: Questions,
    argTypes: {
        // nameImage: {
        //     control: {
        //         type: 'select',
        //         options: ['atom', 'exam', 'molecule', 'microscope']
        //     }
        // },
        //labelText: { control: 'text' },
    }
};



export default meta;

export const FormQuestions = {
    args: {
        // nameImage: 'atom',
        //labelText: 'Ingrese texto',
    }
};