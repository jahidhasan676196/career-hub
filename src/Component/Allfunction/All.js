const getAplicationData=()=>{
    const applicationData=localStorage.getItem('jobsAplication');
    if(applicationData){
        return JSON.parse(applicationData)
    }
    else{
        return []
    }
}


const saveLocalStorageAplicationData=(id)=>{
    const getdata=getAplicationData();
    const exist=getdata.find(jobId=>jobId===id)
    if(!exist){
        getdata.push(id)
        localStorage.setItem('jobsAplication',JSON.stringify(getdata))
    }

}
export {getAplicationData,saveLocalStorageAplicationData}