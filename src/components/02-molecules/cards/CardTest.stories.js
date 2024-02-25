//import {type Meta, type StoryObj} from '@storybook/react';
import { CardTest as Card } from './CardTest';

const meta = {
    title: 'Molecules/Cards',

    component: Card,
    argTypes: {
        idInstitution: { control: 'text' },
        urlImage: { control: 'text' },
        alt: { control: 'text' },
        nameInstitution: { control: 'text' },
        numSimulation: { control: 'text' },
        isDataTest: { control: 'boolean' }
    }
};



export default meta;

export const CardTest = {
    args: {
        idInstitution: '1016',
        urlImage: 'https://picsum.photos/124/100',
        alt: 'Image Test',
        nameInstitution: 'ICFES 9°',
        numSimulation: '3',
        isDataTest: true
    }
};