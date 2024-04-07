import { TitleForm as Title } from './TitleForm';

const meta = {
    title: 'Atoms/form',

    component: Title,
    argTypes: {
        titleText: { control: 'text' },
        paragraph: { control: 'text' },
        classContainer: { control: 'text' },
    },
};


export default meta;

export const TitleForm = {
    args: {
        titleText: 'Iniciar sesión',
        paragraph: 'Ingresa tu correo y contraseña para ingresar',
        classContainer: ''
    }
};