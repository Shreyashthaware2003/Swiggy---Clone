import React from 'react'

function Card(props) {

    return (
        <div className={`${props.width} shrink-0 mb-3`}>
            <div className='group h-[182px]  rounded-[15px] overflow-hidden relative'>
                <img className='group-hover:scale-110 duration-500 object-cover w-full h-full' src={"http://localhost:5173/images/" + props.image} alt="" />
                <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[16px] md:text-[25px] font-bold  text-white tracking-tighter'>
                    {props.offer}
                </div>
            </div>
            <div className='mt-3 text-md md:text-xl font-bold'>{props.title}</div>
            <div className='text-slate-500'>{props.name} <br /> {props.place}
            </div>
        </div>
    )
}

export default Card