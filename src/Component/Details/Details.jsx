import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const user=useLoaderData()
    console.log(user);

    return (
        <div>
            <h3 className='text-[#1A1919] text-4xl font-extrabold my-28 text-center'>Job Details</h3>
            <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2 border'>
                <p>Job Description:{user.length}</p>
                <p>Job Responsibility:</p>
                <p>Educational Requirements:</p>
                <p></p>
                <p>Experiences:</p>
                <p></p>
            </div>
            <div className='col-span-1 border'>

            </div>
        </div>
        </div>
    );
};

export default Details;