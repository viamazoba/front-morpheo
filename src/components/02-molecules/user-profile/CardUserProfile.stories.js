import { CardUserProfile as card } from './CardUserProfile';

const meta = {
    title: 'Molecules/UserProfile/CardUserProfile',

    component: card,
    argTypes: {
        // nameImage: {
        //     control: {
        //         type: 'select',
        //         options: ['atom', 'exam', 'molecule', 'microscope']
        //     }
        // },
        // textCard: { control: 'text' },
    }
};



export default meta;

export const CardUserProfile = {
    args: {
        // nameImage: 'atom',
        // textCard: 'Explora',
    }
};