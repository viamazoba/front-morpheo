import React from 'react';
import Headings from "./Headings.tsx"
// import { MenuCard as CardMenu } from "./MenuCard.tsx"

export default {
    title: 'Atoms/Text',
    // tags: ['autodocs'],
};

export const Heading = (args) => <Headings {...args} />;
// Heading.args = {
//     name: 'h2',
//     fontSize: '32px',
//     fontFamily: 'Outfit',
//     fontWeight: 'bold',
//     lineHeight: '35.68px'
// };