import { useEffect, useState } from "react";
import { getAplicationData } from "../Allfunction/All";
import { useLoaderData } from "react-router-dom";
import ApplicationCard from "../ApplicationCard/ApplicationCard";


const Application = () => {
    const jobsData=useLoaderData()
    const [applicationData,setApplicationData]=useState([])
    
    useEffect(()=>{
        const defineData=getAplicationData()
        const newjobsArray =[]
        if(jobsData.length>0){
            for(const data of defineData){
                const job=jobsData.find(job=>job.id===data)
                if(job){
                    newjobsArray.push(job)
                }
            }
        }
        setApplicationData(newjobsArray)
    },[])

    return (
        <div className="text-center ">
            <h4 className="text-[#1A1919] text-4xl font-extrabold my-24">Applied Jobs</h4>
            <div className="grid grid-cols-1 gap-6">
            {
                applicationData.map(data=><ApplicationCard data={data}></ApplicationCard>)
            }
            </div>
        </div>
    );
};

export default Application;