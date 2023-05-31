const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https =require("https");
const app = express();

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
    const url = "https://us11.api.mailchimp.com/3.0/lists/5b61dede07";
    const option={
        method: "POST",
        auth:"kais:6601fb64bbde40e13522d808b0be86b1-us11"
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
//api key
//6601fb64bbde40e13522d808b0be86b1-us11

//id : 5b61dede07
app.post("/failure",function (req,res) {
    res.redirect("/");
  })

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
})