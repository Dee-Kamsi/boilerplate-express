let express = require('express'); 
let app = express(); 

let bodyParser = require("body-parser"); 

app.use("/public",express.static(__dirname + "/public")) 
app.use(bodyParser.urlencoded({extended: false})); 
app.use((req, res, next) => { 
console.log(`${req.method} ${req.path} - ${req.ip}`); next(); 
}); 
//1 
//console.log("Hello World") 
//2 
// app.get("/",(req,res) => { 
// res.send("Hello Express") 
//}) 
//3 
app.get("/",(req,res) =>{ 
res.sendFile(__dirname + "/views/index.html"); }) 
let message ={message:"Hello json"}; 
app.get("/json", (req, res) => { 
if (process.env["MESSAGE_STYLE"] === "uppercase") { res.json({"message":"HELLO JSON"}); 
} else { 
res.json({"message":"Hello json"}); 
} 
}); 
app.get("/now", (req, res, next) => { 
req.time = new Date().toString(); 
next();
}, (req, res) => { 
res.json({"time": req.time}); 
}); 
app.get("/:word/echo", (req, res) => { 
res.json({"echo": req.params.word}); 
}); 
app.get("/name", (req, res) => { 
res.json({name: req.query.first + " " + req.query.last}); }); 
app.post("/name", (req, res) => { 
res.json({name: req.body.first + " " + req.body.last}); });






































