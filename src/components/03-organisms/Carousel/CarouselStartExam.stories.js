//import {type Meta, type StoryObj} from '@storybook/react';
import { CarouselStartExam as Caro } from './CarouselStartExam';

const meta = {
    title: 'Organisms/Carousel',
    component: Caro,
    argTypes: {
        items: { control: 'object' },
    }
};

export default meta;

export const CarouselStartExam = {
    args: {
        items: [
            {
                id: '1016',
                src: 'https://picsum.photos/124/100',
                alt: 'Image Coupon',
                title: 'UdeA',
                description: 'Examen primer corte 2023',
                textInfo: 'Pruebas de lógica, inglés y lectura',
                text: 'Ver más examenes',
                arrow: true,
                buttonText: 'Comenzar examen',
                newExam: true,
                isDataCard: true,
                onClick: () => {
                    console.log('Button clicked!');
                },
            },
            {
                id: '1016',
                src: 'https://picsum.photos/124/100',
                alt: 'Image Coupon',
                title: 'Unal',
                description: 'Examen segundo corte 2022',
                textInfo: 'Pruebas de materias generales',
                text: 'Ver más examenes',
                arrow: true,
                buttonText: 'Comenzar examen',
                newExam: false,
                isDataCard: true,
                // onClick: () => {
                //     console.log('Button clicked!');
                // },
            },
            {
                id: '1016',
                src: 'https://picsum.photos/124/100',
                alt: 'Image Coupon',
                title: 'ICFES 11°',
                description: 'Examen primer corte 2024',
                textInfo: 'Pruebas de materias generales',
                text: 'Ver más examenes',
                arrow: true,
                buttonText: 'Comenzar examen',
                newExam: true,
                isDataCard: true,
                // onClick: () => {
                //     console.log('Button clicked!');
                // },
            },
        ],
    }
};