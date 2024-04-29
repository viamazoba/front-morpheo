import { CustomAreaText as AreaText } from './CustomAreaText.tsx';

const meta = {
    title: 'Atoms/CustomAreaText',

    component: AreaText,
    argTypes: {
        // nameImage: {
        //     control: {
        //         type: 'select',
        //         options: ['atom', 'exam', 'molecule', 'microscope']
        //     }
        // },
        labelText: { control: 'text' },
        classContainer: { control: 'text' },
    }
};



export default meta;

export const CustomAreaText = {
    args: {
        // nameImage: 'atom',
        labelText: 'Ingrese texto',
        classContainer: ''
    }
};