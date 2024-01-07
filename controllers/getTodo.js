const Todo = require("../models/Todo");

exports.getTodos = async (req,res)=>{
    try{
        const todos= await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched"
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }
}

exports.getTodosById = async(req,res)=>{
   try{
    const id = req.params.id;
    const todo = await Todo.find({_id:id});
    if(!todo){
        return res.status(400)
        .json({
            success:false,
            message:`No Todos Found by Given id ${id}`
        })
     }
     res.status(200)
     .json({
        success:true,
        data:todo,
        message:`Todos Found by Given id ${id}`

     })
   }
   catch(err){
    console.error(err);
    console.log(err.message);
   res.status(500)
   .json({
    success:false,
    eror:err.message,
    message:"server error"
   })
   }
}