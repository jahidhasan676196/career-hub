import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorageAplicationData } from '../Allfunction/All';
// import { saveLocalStorageData } from '../Utilty/Utility';

const Details = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const intId=parseInt(id);
    const job=jobs.find(job=>job.id===intId);
    const {job_description,job_responsibility,educational_requirements,experiences,job_title,salary,contact_information}=job;
    const handleAplaynowclick=()=>{
        toast('Aplication succesfully')
        // saveLocalStorageData(intId)
        saveLocalStorageAplicationData(intId)
    }

    return (
        <div>
            <h3 className='text-[#1A1919] text-4xl font-extrabold my-28 text-center'>Job Details</h3>
            <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2 border text-[#1A1919] text-base font-extrabold space-y-6'>
                <p>Job Description:<span className='text-[#757575] font-semibold'>{job_description}</span></p>
                <p>Job Responsibility:<span className='text-[#757575] font-semibold'>{job_responsibility}</span></p>
                <p>Educational Requirements:</p>
                <p className='text-[#757575] font-semibold'>{educational_requirements}</p>
                <p>Experiences:</p>
                <p className='text-[#757575] font-semibold'>{experiences}</p>
            </div>
            <div className='space-y-6'>
            <div className='col-span-1 border p-8 bg-[#7E90FE1A] space-y-4 text-[#1A1919] text-xl font-extrabold rounded-lg'>
                <p>Job Details</p>
                <hr />
                <p>Salary :<span className='text-[#757575] text-xl font-medium'>{salary}</span></p>
                <p>Job Title : <span className='text-[#757575] text-xl font-medium'>{job_title}</span></p>
                <p>Contact Information</p>
                <hr />
                <p>Phone : <span className='text-[#757575] text-xl font-medium'>{contact_information.phone}</span></p>
                <p>Email : <span className='text-[#757575] text-xl font-medium'>{contact_information.email}</span></p>
                <p>Address : <span className='text-[#757575] text-xl font-medium'>{contact_information.address}</span></p>
            </div>
            <button onClick={handleAplaynowclick} className='btn btn-primary w-full text-white'>Apply Now</button>
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default Details;