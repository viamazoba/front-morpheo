import React from 'react';

const headings = [
    {
        name: 'h2',
        fontSize: '32px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: '35.68px'
    },
    {
        name: 'h3',
        fontSize: '28px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: '31.22px'
    },
    {
        name: 'h4',
        fontSize: '26px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: '29px'
    },
    {
        name: 'h5',
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: 'semibold',
        lineHeight: '28px'
    },
    {
        name: 'h6',
        fontSize: '16px',
        fontFamily: 'Roboto',
        fontWeight: '300',
        lineHeight: '22.5px'
    },

]



const Headings = () => {
    return (
        headings.map((heading) => 
            <div className="flex items-center mb-6 bg-principal-150 rounded-base py-4 pl-10 drop-shadow-4xl" key={heading.name}>
                <div className={`w-20`}>
                    <b className='text-20'>{heading.name}</b>
                </div>
                <div className={`flex flex-col justify-between w-52 h-28`}>
                    <p><b>font-size:</b> {heading.fontSize}</p>
                    <p><b>font-family:</b> {heading.fontFamily}</p>
                    <p><b>font-weight:</b> {heading.fontWeight}</p>
                    <p><b>line-heigt:</b> {heading.lineHeight}</p>
                </div>
                <div className={`${heading.name}`}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        )
    )
}

export default Headings