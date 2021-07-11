const express= require('express');
const app= express();

app.get('/',(req,res)=> {
    res.send("Hello world from the server");
});

app.get('/about',(req,res)=> {
    res.send("Hello from the About Page");
});

app.get('/contact',(req,res)=> {
    res.send("Hello from the Contact Page");
});

app.get('/signin',(req,res)=> {
    res.send("Hello from the Login Page");
});

app.get('/signup',(req,res)=> {
    res.send("Hello from the Register Page");
});

app.listen(3000,()=>{
    console.log('Server is runing at PORT 3000');
});
