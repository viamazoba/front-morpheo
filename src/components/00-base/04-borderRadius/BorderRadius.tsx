import React from 'react';

const borders = [
    {
        key: 1,
        border: '2px',
        borderT: 'rounded-2'
    },
    {
        key: 2,
        border: '4px',
        borderT: 'rounded-4'
    },
    {
        key: 3,
        border: '13.5px',
        borderT: 'rounded-sm'
    },
    {
        key: 4,
        border: '20px',
        borderT: 'rounded-20'
    },
    {
        key: 5,
        border: '24px',
        borderT: 'rounded-24'
    },
]



const BorderRadius = () => {
    return (
        <div className='flex w-full h-full bg-principal-150'>

            {
                borders.map((border) =>
                    <div className='p-5' key={border.key}>
                        <p className='text-20 pb-0'><b>Boder-radius:</b></p>
                        <p className='mb-0 mt-0'>{border.border}</p>
                        <p className='text-15 mb-0 mt-0'><b>{border.borderT}</b></p>
                        <div className={`w-24 h-24 rounded-12 mt-10 ${border.borderT} bg-principal-100`}/>
                    </div> 
                )
            }
        </div>
    )
}

export default BorderRadius