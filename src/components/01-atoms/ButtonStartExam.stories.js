//import {type Meta, type StoryObj} from '@storybook/react';
import { ButtonStartExam as Button } from './ButtonStartExam';
//import {type ButtonStartExamInterface} from '@/interfaces';

const meta = {
    title: 'Atoms/ButtonStartExam',
    component: Button,
    argTypes: {
        buttonText: { control: 'text' },
        onClick: { action: 'clicked' },
        secondary: { action: 'boolean' }
    },
};

export default meta;

export const ButtonStartExam = {
    args: {
        buttonText: 'Comenzar examen',
        onClick: () => {
            console.log('Button clicked!');
        },
        secondary: false
    }
};