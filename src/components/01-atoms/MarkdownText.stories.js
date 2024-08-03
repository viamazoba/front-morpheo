import { MarkdownText as Markdown } from './MarkdownText';

const meta = {
    title: 'Atoms/MarkdownText',

    component: Markdown,
    argTypes: {
        // nameImage: {
        //     control: {
        //         type: 'select',
        //         options: ['atom', 'exam', 'molecule', 'microscope']
        //     }
        // },
        //labelText: { control: 'text' },
    }
};



export default meta;

export const MarkdownText = {
    args: {
        // nameImage: 'atom',
        //labelText: 'Ingrese texto',
    }
};