//import {type Meta, type StoryObj} from '@storybook/react';
import { CarouselTest as Caro } from './CarouselTest';

const meta = {
    title: 'Organisms/Carousel/CarouselTest',
    component: Caro,
    argTypes: {
        items: { control: 'object' },
    }
};

export default meta;

export const CarouselTest = {
    args: {
        items: [
            {
                idInstitution: '1016',
                urlImage: 'https://picsum.photos/124/100',
                alt: 'Image Test',
                nameInstitution: 'ICFES 9°',
                numSimulation: '3',
                isDataTest: true
            },
            {
                idInstitution: '1016',
                urlImage: 'https://picsum.photos/124/100',
                alt: 'Image Test',
                nameInstitution: 'ICFES 10°',
                numSimulation: '2',
                isDataTest: true
            },
            {
                idInstitution: '1016',
                urlImage: 'https://picsum.photos/124/100',
                alt: 'Image Test',
                nameInstitution: 'ICFES 11°',
                numSimulation: '4',
                isDataTest: true
            },
            {
                idInstitution: '1016',
                urlImage: 'https://picsum.photos/124/100',
                alt: 'Image Test',
                nameInstitution: 'Universidad Nacional',
                numSimulation: '2',
                isDataTest: true
            }
        ],
    }
};