const express=require("express");
const bodyparser=require("body-parser");
const app=new express();
const port=5000

app.use(bodyparser.json());

app.get('/',(request,response)=>{
    const status={
        "status":"hello"
    }
    response.send(status);
})
app.post('/Addition',(request,response)=>{
    const {num1,num2}=request.body;
    if(num1===undefined||num2===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const num =num1+num2;
        response.json({num})
    }
})
app.post('/Subtraction',(request,response)=>{
    const {num1,num2}=request.body;
    if(num1===undefined||num2===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const num=num1-num2;
        response.json({num})
    }
}) 
app.post('/Multiplication',(request,response)=>{
    const {num1,num2}=request.body;
    if(num1===undefined||num2===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const num=num1*num2;
        response.json({num})
    }
})
app.post('/Division',(request,response)=>{
    const {num1,num2}=request.body;
    if(num1===undefined||num2===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const num=num1/num2;
        response.json({num})
    }
})
app.post('/Remainder',(request,response)=>{
    const {num1,num2}=request.body;
    if(num1===undefined||num2===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const num=num1%num2;
        response.json({num})
    }
})
app.listen(port,()=>{
    console.log("listening this port "+port);
})