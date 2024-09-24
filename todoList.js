const express=require("express")
const a=express()
const fs=require("fs")
a.use(express.json());

const todos=[
    {   id:1,
        title:"Leetcode",
        Completed:false,
        Description:"JUST DO IT"
    },
    {   id:2,
        title:"Development",
        Completed:true,
        Description:"Just Think and Create"
    } 
]
  a.get("/todos",function(req,res){
    
    res.send(todos)
  })  
a.get("/todos/:id",function(req,res){
    const id_no = req.params.id;
    let f=0
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id_no){
            f=1
            res.json(todos[i])
        }
    }
    if(f==0) res.send("ENTER VALID ID")
})
a.post("/todos",function(req,res){
    const new_todo=req.body;
     let idx=todos.length
    todos.push(
        new_todo
    )
    res.json({
        msg: "DONE BHAI"
    })
})
a.put("/todos/:id",function(req,res){
    const i_no = req.params.id;
    const content=req.body
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==i_no){
            todos[i].title=content.title
            todos[i].Description=content.Description
        }    
    }
    res.json({})
})
a.listen(3000)