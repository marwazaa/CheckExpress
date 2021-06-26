const express=require('express')
const app =express() 

const path=require('path') 

const midd = require('./middelware/midd.js'); 


 app.get('/',midd,(req,res)=>{ res.sendFile(path.join(__dirname,'public','Home.html'))})


//
app.get('/Home.html',(req,res)=>res.sendFile(__dirname+'/public/Home.html'))
app.get('/Contact.html',(req,res)=>res.sendFile('C:/Users/admin/Desktop/Expresss/public/Contact.html'))
app.get('/Service.html',(req,res)=>res.sendFile('C:/Users/admin/Desktop/Expresss/public/Service.html'))


app.listen(3000,(err)=>{ if (err) { throw err} else{console.log("service run")}})