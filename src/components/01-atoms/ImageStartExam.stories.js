//import {type Meta, type StoryObj} from '@storybook/react';
import { ImageStartExam as Image } from './ImageStartExam';

const meta = {
    title: 'Atoms/ImageStartExam',

    component: Image,
    argTypes: {
        src: { control: 'text' },
        alt: { control: 'text' },
    },
};


export default meta;

export const ImageStartExam = {
    args: {
        src: 'https://picsum.photos/124/100',
        alt: 'Image start exam'
    }
};