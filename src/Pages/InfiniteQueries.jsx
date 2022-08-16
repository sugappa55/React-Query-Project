import { CircularProgress, Spinner } from '@chakra-ui/react';
import {useInfiniteQuery} from "react-query"
import React, { Fragment } from 'react'
import Todo from '../Components/Todo';
import { api } from '../Helpers/api';

const InfiniteQueries = () => { 

    const fetchTodos=async({pageParam=1})=>{
      try {
          return await api.get(`/todos?_page=${pageParam}&_limit=5`)
      } catch (error) {
          throw error(error.message)
      }
  }

    const {data,isLoading,fetchNextPage,isFetching,isFetchingNextPage,hasNextPage}=useInfiniteQuery(["infinite-todos"],fetchTodos,{
        // keepPreviousData:true,
        getNextPageParam:(_lastPage,pages)=>{
                if(pages.length<4)return pages.length+1;
                return undefined
        },
       })

      console.log("infinite data:",data)

   
    return (
        <div style={{width:"100%"}}className=" bg-gray-100 flex flex-col gap-y-1 items-center">
    
          {
            isLoading?<CircularProgress/>:(
              data?.pages.map((group,i)=>(
             <Fragment key={i} >
                {
                  group.data.map(todo=>
                    <Todo todo={todo} key={todo.id}/>
                    )
                }
             </Fragment>
              ))
            )
          }
      
      <div>
      <div>{isFetching && !isFetchingNextPage ? <Spinner/>: null}</div>


<button

  onClick={() => fetchNextPage()}

  disabled={!hasNextPage || isFetchingNextPage}

>

  {isFetchingNextPage

    ? 'Loading more...'

    : hasNextPage

    ? 'Load More'

    : 'Nothing more to load'}

</button>

</div>





        </div>
      );
}

export default InfiniteQueries