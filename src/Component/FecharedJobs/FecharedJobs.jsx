import { useEffect, useState } from "react";
import JobsCard from "../JobsCard/JobsCard";


const FecharedJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="text-center">
            <h2 className="text-5xl text-[#1A1919] font-extrabold">Featured Jobs</h2>
            <p className="text-base text-[#757575] font-normal mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2">
                {
                    jobs.map(job=><JobsCard job={job}></JobsCard>)
                }
            </div>

        </div>
    );
};

export default FecharedJobs;