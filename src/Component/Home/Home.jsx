import React, { useEffect, useState } from 'react';

import { data } from 'autoprefixer';
import Banner from '../Banner/Banner';
import CatagoryCard from '../CatagoryCard/CatagoryCard';
import FecharedJobs from '../FecharedJobs/FecharedJobs';

const Home = () => {
    const [caragorys,setCatagorys]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCatagorys(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className='my-12 text-center'>
                <h3 className='text-5xl text-[#1A1919] font-extrabold'>Job Category List</h3>
                <p className='text-base text-[#757575] font-normal mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex gap-6 justify-between '>
                {
                    caragorys.map(category=><CatagoryCard category={category}></CatagoryCard>)
                }
                </div>
            </div>
            <FecharedJobs></FecharedJobs>
        </div>
    );
};

export default Home;