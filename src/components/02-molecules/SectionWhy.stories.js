import { SectionWhy as Section } from './SectionWhy';

const meta = {
    title: 'Molecules/SectionWhy',

    component: Section,
    argTypes: {
        classNameSection: { control: 'text' },
        colorText: { control: 'text' },
        title: { control: 'text' },
        paragraph: { control: 'text' },
        textCard: { control: 'text' },
    }
};



export default meta;

export const SectionWhy = {
    args: {
        classNameSection: '',
        colorText: '',
        title: 'Bienvenidos a Morpheo',
        paragraph: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!'
    }
};