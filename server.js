const express = require("express");
const app = express()


app.get('/api/get', (req,res)=>{
    res.send({message:'get api is run successfully'})
})

app.listen(6000,()=>{
    console.log('server is running')
})