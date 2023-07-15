const fs = require ("fs")

const addPerson = ( id, fname, lname, age, city)=>{
    const allData = loadData()
     
    const duplicatedData = allData.filter((obj)=>{
        return obj.id == id
    })
    if(duplicatedData.length==0){
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city
        })
        saveAllData(allData)
    }else{
        console.log("error duplicatedData")
    }



}
/////////////////////////////////////////////////////////
const loadData =()=>{
     try{
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
     }catch{
        return []
     }
}
////////////////////////////////////////////////////////////////
const saveAllData =(allData)=>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json",saveAllDataJson)
}
/////////////////////////////////////////////////////////////
const deleteData = (id)=>{
    const allData = loadData()
    const dataKept=allData.filter((obj)=>{
        return obj.id !== id
    })
    saveAllData(dataKept)
}
////////////////////////////////////////////
const list = ()=>{
    const allData = loadData()
    allData.forEach((obj)=>{
        console.log(obj.fname , obj.lname ,obj.city)
    })
}
///////////////////////////
const readData=(id)=>{
    const allData = loadData()
   const personNeeded= allData.find((obj)=>{
           return obj.id == 5
    })
    console.log(personNeeded)
}
//////////////////////////////////////////////////////////
module.exports ={
    addPerson,
    deleteData,
    list,
    readData
}