const getLocalStorageData=()=>{
    const getData=localStorage.getItem('jobAplications')
    if(getData){
        return JSON.parse(getData)
    }
    else{
        return []
    }
}
const saveLocalStorageData=(id)=>{
    const aplicationData=getLocalStorageData()
    const exist=aplicationData.find(jobId=>jobId===id)
    if(!exist){
        aplicationData.push(id)
        localStorage.setItem('jobAplications',JSON.stringify(aplicationData))
    }

}

export {getLocalStorageData,saveLocalStorageData}