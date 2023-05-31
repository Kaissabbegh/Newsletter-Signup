const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https =require("https");
const app = express();
require("dotenv").config();
const MAPI_KEY = process.env.API_KEY
const MAPI_SERVER = process.env.API_SERVER
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){

    const fisrtname=req.body.Firstname;
    const lastname=req.body.Lastname;
    const email=req.body.Email;
    var data= {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: fisrtname,
                    LNAME: lastname
                }
            }
        ]
    };
    const jsonData= JSON.stringify(data);
    const url = "https://us11.api.mailchimp.com/3.0/lists/"+MAPI_SERVER;
    const option={
        method: "POST",
        auth:"kais:"+MAPI_KEY
    }
    const request =https.request(url,option,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    // request.write(jsonData);
    request.end();
});
app.post("/failure",function (req,res) {
    res.redirect("/");
  })

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
})