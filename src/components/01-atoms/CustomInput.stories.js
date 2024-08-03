import { CustomInput as Input } from './CustomInput';

const meta = {
    title: 'Atoms/form',
    component: Input,
    argTypes: {
        idInput: { control: 'text' },
        classContainer: { control: 'text' },
        labelInput: { control: 'text' },
        classLabel: { control: 'text' },
        typeInput: {
            control: {
                type: 'select',
                options: ['text', 'email', 'number', 'tel', 'file', 'date', 'datetime', 'password']
            }
        },
        placeholderInput: { control: 'text' },
        valueRequired: { action: 'boolean' },
        classInput: { control: 'text' },
        onChange: { action: 'clicked' },
        value: { control: 'text' },
    },
};

export default meta;

export const CustomInput = {
    args: {
        idInput: 'idInput',
        classContainer: '',
        labelInput: 'Este es el label',
        classLabel: '',
        typeInput: 'text',
        placeholderInput: 'Ingrese un valor',
        valueRequired: true,
        classInput: '',
        onChange: () => {
            console.log('Button clicked!');
        },
        value: ''
    }
};