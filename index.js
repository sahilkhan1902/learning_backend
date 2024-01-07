const express = require('express');
const app = express();
// load config from env file
const PORT = process.env.PORT || 4000;

// middleware to parse json request from the body
app.use(express.json());

//import route from todo api
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

//server started
app.listen(PORT, ()=>{
    console.log(`Server Started successfully at ${PORT}`)
});
 

//connected to database
const dbConnect = require("./config/database");
dbConnect();
 

// default route
app.get('/',(req,res)=>{
    res.send('<h1> This is homepage </h1>')
});