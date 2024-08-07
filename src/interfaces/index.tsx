import { Options } from '@/../@splidejs/react-splide'
import { FormEvent, MouseEventHandler } from 'react';
// export interface CardCouponInterface {
//     src: string;
//     alt: string
//     title: string;
//     description: string;
//     textInfo: string;
//     text?: string;
//     arrow: boolean
//     buttonText?: string;
//     discount?: string;
//     onClick?: () => void;
// }

export interface HeaderItemInterface {
    options?: string[];
}

export interface CardTestInterface{
    idInstitution?: string;
    urlImage?: string;
    alt?: string;
    nameInstitution?: string;
    numSimulation?: string;
    isDataTest?: boolean;
}

export interface CarouselInterface{
    className?: string;
    tag?: 'div' | 'section' | 'header' | 'footer' | 'nav';
    renderItem: React.ReactElement;
    items: Array<{ [key: string]: any }>;
    options?: Options;
}

export interface CarouselTestInterface{
    items?: CardTestInterface[];
}

export interface CardStartExamInterface {
    id?: string;
    src?: string;
    alt?: string
    title?: string;
    description?: string;
    textInfo?: string;
    text?: string;
    arrow?: boolean
    buttonText?: string;
    newExam?: boolean;
    isDataCard?:boolean;
    // onClick?: () => void;
}

export interface BandStartExamInterface{
    newExam?: boolean;
}

export interface ButtonStartExamInterface {
    buttonText: string;
    secondary?: boolean;
    onClick?: () => void;
}

export interface MoreExamsInterface {
    text: string;
    arrow: boolean;
    onClick?: () => void
}

export interface TextCardStartExamInterface {
    title: string;
    description: string;
    textInfo: string;
}

export interface ImageStartExamInterface {
    src: string;
    alt: string
}

export interface CarouselStartExamInterface{
    items: CardStartExamInterface[];
}

export interface CardBannerHomeInterface{
    nameImage: 'atom'|'exam'|'molecule'|'microscope';
    textCard: string;
    className?: string;
}

export interface GeneralLayoutInterface{
    children: React.ReactNode;
}

export interface SectionWhyInterface{
    classNameSection?: string;
    colorText?: string;
    title: string;
    paragraph: string;
}

export interface GeneralSectionInterface{
    classSection?: string,
    classBlockText?: string,
    colorText?: string,
    title: string,
    paragraph: string,
    classComponent?: string,
    renderItem: React.ReactElement;
    items: Array<{ [key: string]: any }>;
}

export interface customInputInterface{
    idInput: string;
    classContainer?: string;
    labelInput: string;
    classLabel?: string;
    typeInput: 'text'|'email'|'number'|'tel'|'file'|'date'|'datetime'|'password';
    placeholderInput?: string;
    valueRequired?: boolean;
    classInput?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    regex: RegExp;
    regexMessage?: string;
}

export interface GeneralButtonInterface{
    buttonType: 'redButton'|'greenButton'|'blueButton'|'blueTwoButton'|string;
    textButton: string;
    classButton: string;
    onCLick?: () => void;
    type?: 'submit'|'button'|'reset';
}

export interface LinkTextInterface {
    href: string;
    text: string;
    classNameText?: string;
    classNameContainer?: string;
}

export interface TitleFormInterface{
    titleText: string;
    paragraph?: string;
    classContainer?: string;
}