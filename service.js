const express =require('express')
const router=express.Router()

let listofservices=[
    {
        "id":1,
        "Name":"webdevelopment"

    },
    {
        "id":1,
        "Name":"digital"

    },
    {
        "id":3,
        "Name":"bigdata"

    
    }

]
router.get('/',(request,response)=>{
    response.send("hloo")
})
router.get('/:id',(request,response)=>{
    const routerId=Number(request.params.id)
    const getRouter=listofservices.find((router)=>router.id===routerId)
    if(!getRouter)
    {
        response.status(500).send("Expected service not found")
        console.log(request.params.id);
    }
    else
    {
        response.json(getRouter)
    }
    
})
module.exports=router