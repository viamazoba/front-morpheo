//import {type Meta, type StoryObj} from '@storybook/react';
import { MoreExams as More } from './MoreExams';

const meta = {
    title: 'Atoms/Text',

    component: More,
    argTypes: {
        text: { control: 'text' },
        arrow: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
};


export default meta;

export const MoreExams = {
    args: {
        text: 'Ver más examenes',
        arrow: true,
        onClick: () => {
            console.log('Button clicked!');
        },
    }
};