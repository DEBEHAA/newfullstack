var express = require('express')
var app =  express()
const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Server started\nUrl: http://localhost:${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("welcome to backend server")
})
app.get('/static',(req,res)=>{
    res.sendFile('D:/trainingfullstack1/myprojectbackend/index.html')
})
app.get('/json',(req,res)=>{
    res.json({server:"welcome to backend",url:"localhost",port:PORT})
})