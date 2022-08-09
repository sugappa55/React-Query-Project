import { Spinner, useToast , Center, Heading, } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery} from "react-query"
import Todo from "./Components/Todo";
import { fetchTodos } from "./Helpers/api";
function App() {
  const toast=useToast()
  const [page,setPage]=useState(1)
  const {data,isLoading}=useQuery(["todos",page],fetchTodos,{
    // keepPreviousData:true,
    onError:(error)=>{toast({status:"error",title:"Unable fetch the data"})},
    onSuccess:(data)=>{toast({status:"success",title:"data fetched successfully"})}
  })
  


  return (
    <div style={{width:"100%"}}className=" bg-gray-100 h-screen flex flex-col gap-y-1 items-center">
      <Center>
        <Heading className="my-2">My Task Board</Heading>
      </Center>

       {/* <Center>
       <AddTodo/>
       </Center> */}

      {
        isLoading?<Spinner/>:(
          data?.map(todo=>(
          <Todo todo={todo} key={todo.id}/>
          ))
        )
      }
      <div className="lg:w-[800px] w-[98%] lg:my-4 flex justify-around ">
        <button className="px-3 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition-all delay-300 ease-in-out" disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button className="px-3 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition-all delay-300 ease-in-out" onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
