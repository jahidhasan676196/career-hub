

const ApplicationCard = ({data}) => {
    const {logo,job_title,company_name}=data
    return (
        <div className="border rounded-lg ">
            <div className="card card-side p-8">
  <figure className="bg-[#F4F4F4] w-56  h-56 rounded-lg flex items-center justify-center p-8">
    <img className=""
      src={logo}
      alt="Movie" />
  </figure>
  <div className="card-body text-start">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='flex gap-10 justify-start'>
      <button className='btn text-[#7E90FE]'>Remote</button>
      <button className='btn text-[#7E90FE]'>Full Time</button>
    </div>
    <div className='flex '>
      <p className='flex items-center'> Dhaka, Bangladesh</p>
      <p className='flex items-center'> Salary : 100K - 150K</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
</div>
    );
};

export default ApplicationCard;