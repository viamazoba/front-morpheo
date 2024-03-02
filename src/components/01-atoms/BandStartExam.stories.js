//import {type Meta, type StoryObj} from '@storybook/react';
import { BandStartExam as Band } from './BandStartExam';

const meta = {
    title: 'Atoms/BandStartExam',

    component: Band,
    argTypes: {
        newExam: { control: 'boolean' },
    },
};


export default meta;

export const BandStartExam = {
    args: {
        newExam: 'true',
    }
};