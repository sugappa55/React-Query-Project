import React from 'react'
import { deleteTodo, updateTodos } from '../Helpers/api'
import { getColour } from '../Styles/getColor'
import { useMutation, useQueryClient } from 'react-query'
import { useToast } from '@chakra-ui/react'


const Todo = ({todo}) => {
    const toast=useToast()
    const cache=useQueryClient()

    const {mutateAsync:updateTodo}=useMutation((params)=>updateTodos(params),{
        onSuccess:()=>{
          cache.invalidateQueries("todos");
          toast({status:"success",title:"Task Updated successfully"})

        },
        onError:(e)=>{
          toast({status:"error",title:"Task updation failed"})
        }
    })
    const {mutateAsync:deletetodo}=useMutation((id)=>deleteTodo(id),{
        onSuccess:()=>{
          cache.invalidateQueries("todos")
          toast({status:"success",title:"Task Deleted successfully"})

        },
        onError:(e)=>{
          toast({status:"error",title:"Task updation failed"})
        }
    })
  return (
    <div key={todo.id} className="lg:w-[800px] w-[98%] m-2 lg:m-0 flex justify-around shadow-md bg-white p-2 border rounded">
    <div>
      <p>Task: {todo.task}</p>
      <p>Assignee: {todo.assignee}</p>
      <p>Estimated Time: {todo.days}d{" "}{todo.hours}{todo.hours<=1?"hr":"hrs"}</p>
        <button className="px-4 py-1 rounded-md bg-green-500 hover:bg-green-600"onClick={()=>updateTodo({id:todo.id,status:todo.status==="Todo"?"In-Progress":todo.status==="In-Progress"?"Completed":"Todo"})}>Mark as {todo.status==="Todo"?"In Progress":todo.status==="In-Progress"?"Completed":"Todo"}</button>
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <p>Priority:</p>
        <div className="text-white rounded px-2 py-1"  style={{backgroundColor:`${getColour(todo.priority)}`}}>{todo.priority}</div>
      </div> 
      <div className="flex items-center gap-1">
        <p>Status:</p>
        <div className="text-white rounded px-2 py-1" style={{backgroundColor:`${getColour(todo.status)}`}}>{todo.status}</div>
      </div>
        <button className="bg-red-500 hover:bg-red-600 rounded ripple" onClick={()=>deletetodo(todo.id)}>Delete</button>
    </div>
    </div>
  )
}

export default Todo