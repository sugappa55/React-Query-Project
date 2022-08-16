import { Center, Heading, Spinner, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import Todo from '../Components/Todo'
import { fetchTodos } from '../Helpers/api'
import { useQuery } from 'react-query'

const TaskBoard = () => {
    const toast=useToast()
  const [page,setPage]=useState(1)
  const {data,isLoading}=useQuery(["todos",page],fetchTodos,{
    // keepPreviousData:true,
    onError:(error)=>{toast({status:"error",title:"Unable fetch the data"})},
    onSuccess:(data)=>{toast({status:"success",title:"data fetched successfully"})}
  })
  console.log("data:",data);
  return (
    <div style={{width:"100%"}}className=" bg-gray-100 flex flex-col gap-y-1 items-center">
    <Center>
      <Heading className="my-2">My Task Board</Heading>
    </Center>


    {
      isLoading?<Spinner/>:(
        data?.map(todo=>(
        <Todo todo={todo} key={todo.id}/>
        ))
      )
    }
    <div className="lg:w-[800px] w-[98%] lg:my-4 flex justify-around ">
      <button className="px-3 py-2 hover:bg-black text-white rounded-md bg-gray-600 transition-all delay-300 ease-in-out" disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
      <button className="px-3 py-2 hover:bg-black text-white rounded-md bg-gray-600 transition-all delay-300 ease-in-out" onClick={()=>setPage(page+1)}>Next</button>
    </div>
  </div>
  )
}

export default TaskBoard