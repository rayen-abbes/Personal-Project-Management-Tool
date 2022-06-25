import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//cors enabel cross origin requests
import cors from 'cors';
import postRoutes from './routes/tasks.js' 

//run the app as a function
const app = express();

//every route inside of postRouts will start from tasks
app.use("/tasks",postRoutes)

//connecting to the the mongoDB atlas server
//store the connection link in a var to make it easier 
var CONNECTION_URL = "mongodb+srv://root123:root123@cluster0.hlf3w7m.mongodb.net/?retryWrites=true&w=majority"
const port = 5000

mongoose.connect(CONNECTION_URL)

//src:MDN//use .then and .catch because it returns a promise 
.then(()=>app.listen(port,()=>console.log(`server running on port ${port} sucessfully`)))
.catch((error)=>console.log(error.message));


//Get the default connection for easier acess
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
