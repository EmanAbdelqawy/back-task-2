// task-2
const yargs = require("yargs")
const data = require ("./data")

yargs.command({
    command:"add",
    describe:"to add an item",
    handler:(x)=>{
        data.addPerson(x.id ,x.fname , x.lname ,x.age ,x.city)
    }
})
////////////////////////////////////
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x)=>{
        data.deleteData(x.id )
    }
})
/////////////////////////////////////////////////
yargs.command({
    command:"list",
    describe:"to do list",
    handler:()=>{
        data.list()
    }
})
////////////////////////////////////////////////////////
yargs.command({
    command:"read",
    describe:"to read an item",
    handler:(x)=>{
        data.readData(x.id)
    }
})






yargs.parse()

