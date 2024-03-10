import { GeneralSection as Section } from './GeneralSection';

const meta = {
    title: 'Organisms/GeneralSection',
    component: Section,
    argTypes: {
        classSection: { control: 'text' },
        classBlockText: { control: 'text' },
        colorText: { control: 'text' },
        title: { control: 'text' },
        paragraph: { control: 'text' },
        classComponent: { control: 'text' },
        renderItem: { control: 'text' },
        items: { control: 'text' }
    }
};



export default meta;

export const GeneralSection = {
    args: {
        classSection: '',
        classBlockText: '',
        colorText: '',
        title: 'Bienvenidos a Morpheo',
        paragraph: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!',
        classComponent: '',
        renderItem: '<p>Aquí va el componente a renderizar</p>',
        items: '[hola]'
    }
};