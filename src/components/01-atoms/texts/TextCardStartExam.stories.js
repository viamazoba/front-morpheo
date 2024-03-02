//import {type Meta, type StoryObj} from '@storybook/react';
import { TextCardStartExam as Text } from './TextCardStartExam';

const meta = {
    title: 'Atoms/Text',

    component: Text,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        textInfo: { control: 'text' },
    },
};


export default meta;

export const TextCardStartExam = {
    args: {
        title: 'UdeA',
        description: 'Examen primer corte 2021',
        textInfo: 'Pruebas de lógica, inglés y lectura'
    }
};