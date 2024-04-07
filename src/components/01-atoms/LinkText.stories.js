import { LinkText as Text } from './LinkText';

const meta = {
    title: 'Atoms/form',

    component: Text,
    argTypes: {
        href: { control: 'text' },
        text: { control: 'text' },
        classNameText: { control: 'text' },
        classNameContainer: { control: 'text' }
    },
};


export default meta;

export const LinkText = {
    args: {
        href: '#',
        text: '¿Olvidaste tu contraseña?',
        classNameContainer: '',
        classNameText: ''
    }
};