import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const JobsCard = ({job}) => {
    const { id,logo,job_title,company_name,remote_or_onsite,locarion,job_type,salary,job_description,job_responsibility}=job
    return (
        <div>
    <div className="card bg-base-100  border p-5 space-y-6">
  <figure>
    <img className='text-start'
      src={logo} />
  </figure>
  <div className="card-body text-start">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='flex gap-10 justify-start'>
      <button className='btn text-[#7E90FE]'>Remote</button>
      <button className='btn text-[#7E90FE]'>Full Time</button>
    </div>
    <div className='flex gap-2'>
      <p className='flex items-center'><IoLocationSharp></IoLocationSharp> Dhaka, Bangladesh</p>
      <p className='flex items-center'><HiCurrencyDollar></HiCurrencyDollar> Salary : 100K - 150K</p>
    </div>
    <div className="card-actions ">
      <Link to={`/job/${id}`}><button className="btn btn-primary text-white">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobsCard;