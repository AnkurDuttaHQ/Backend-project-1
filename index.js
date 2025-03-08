const exp = require("express");
const app = exp();

let port= 8080;

app.set("view engine","ejs");

app.listen(port, ()=>{
    console.log("server is listening")
})

app.get("/ig/:username",(req,res)=>{
   const instaData = require("./data.json");
   let {username} = req.params;
   const data = instaData[username];
   console.log(instaData);
   res.render("instagram.ejs",{data});
    
})


