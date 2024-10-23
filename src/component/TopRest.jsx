import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Card from './Card';

function TopRest() {
    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch("/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )



    return (
        <div className='max-w-[1200px] mx-auto mb-4 px-2 ' >
            <div className='my-5 flex items-center justify-between'>
                <div className='text-[25px] font-semibold'>Top restaurant chains in Maharashtra</div>
                <div className='flex'>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer'  ><FaArrowLeft /></div>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer' ><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex gap-5 overflow-hidden'>
                {
                    data.map(
                        (d, i) => {
                            return <Card width="w-full md:w-[273px]" {...d} key={i} />
                        })
                }
            </div>
        </div>
    )
}

export default TopRest
