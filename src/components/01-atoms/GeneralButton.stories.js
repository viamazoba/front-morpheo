import { GeneralButton as Button } from './GeneralButton';

const meta = {
    title: 'Atoms/form',
    component: Button,
    argTypes: {
        buttonType: {
            control: {
                type: 'select',
                options: ['redButton', 'greenButton', 'blueButton', 'blueTwoButton']
            }
        },
        textButton: { control: 'text' },
        classButton: { control: 'text' },
        onCLick: { action: 'clicked' },
    },
};

export default meta;

export const GeneralButton = {
    args: {
        buttonType: 'greenButton',
        textButton: 'Ingresar',
        classButton: '',
        onCLick: () => {
            console.log('Button clicked!');
        }
    }
};