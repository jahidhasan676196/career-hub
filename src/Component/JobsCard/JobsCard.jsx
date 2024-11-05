import React from 'react';

const JobsCard = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,locarion,job_type,salary,job_description,job_responsibility}=job
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={logo} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobsCard;