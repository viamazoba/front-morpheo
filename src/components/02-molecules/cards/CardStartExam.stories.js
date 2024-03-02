//import {type Meta, type StoryObj} from '@storybook/react';
import { CardStartExam as Card } from './CardStartExam';

const meta = {
    title: 'Molecules/Cards',

    component: Card,
    argTypes: {
        id: { control: 'text' },
        src: { control: 'text' },
        alt: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        textInfo: { control: 'text' },
        text: { control: 'text' },
        arrow: { control: 'boolean' },
        buttonText: { control: 'text' },
        newExam: { control: 'boolean' },
        isDataCard: { control: 'boolean' },
        onClick: { action: 'clicked' }
    }
};



export default meta;

export const CardStartExam = {
    args: {
        id: '1016',
        src: 'https://picsum.photos/124/100',
        alt: 'Image Coupon',
        title: 'UdeA',
        description: 'Examen primer corte 2021',
        textInfo: 'Pruebas de lógica, inglés y lectura',
        text: 'Ver más examenes',
        arrow: true,
        buttonText: 'Comenzar examen',
        newExam: true,
        isDataCard: true,
        onClick: () => {
            console.log('Button clicked!');
        },
    }
};