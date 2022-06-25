import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    id:String,
    projectName:String,
    details:String,
    url:String,
    githubRepo:String
})


const taskMessage = mongoose.model(taskMessage,taskSchema);

export default taskMessage;