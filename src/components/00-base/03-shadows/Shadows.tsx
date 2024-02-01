import React from 'react';

const shadows = [
    {
        key: 1,
        shadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.07)',
        shadowT: 'shadow-3xl'
    },
    {
        key: 2,
        shadow: '0px 10px 20px 0px rgba(0, 60, 106, 0.15)',
        shadowT: 'shadow-4xl'
    },
    {
        key: 3,
        shadow: '0px 15px 10px 0px rgba(0, 61, 165, 0.07)',
        shadowT: 'shadow-5xl'
    },
    {
        key: 4,
        shadow: '0px 9px 10px 0px rgba(0, 60, 106, 0.07)',
        shadowT: 'shadow-6xl'
    },
]



const Shadows = () => {
    return (
        <div className='flex w-full h-full bg-principal-150'>

            {
                shadows.map((shadow) =>
                    <div className='p-5' key={shadow.key}>
                        <p className='text-20 pb-0'><b>Shadow:</b></p>
                        <p className='mb-0 mt-0'>{shadow.shadow}</p>
                        <p className='text-15 mb-0 mt-0'><b>{shadow.shadowT}</b></p>
                        <div className={`w-24 h-24 rounded-12 mt-10 ${shadow.shadowT} bg-principal-150`}/>
                    </div> 
                )
            }
        </div>
    )
}

export default Shadows