//import {type Meta, type StoryObj} from '@storybook/react';
import { CardBannerHome as Card } from './CardBannerHome';

const meta = {
    title: 'Molecules/Cards',

    component: Card,
    argTypes: {
        nameImage: {
            control: {
                type: 'select',
                options: ['atom', 'exam', 'molecule', 'microscope']
            }
        },
        textCard: { control: 'text' },
    }
};



export default meta;

export const CardBannerHome = {
    args: {
        nameImage: 'atom',
        textCard: 'Explora',
    }
};