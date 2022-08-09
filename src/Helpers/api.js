import axios from "axios";

 const api=axios.create({
    baseURL:process.env.REACT_APP_URL
})

export const fetchTodos=async({queryKey})=>{
    try {
        return await api.get(`/todos?_page=${queryKey[1]}&_limit=6`).then(res=>res.data)
    } catch (error) {
        throw error(error.message)
    }
}

export const updateTodos=async({id,status})=>{
    try {
        return await api.patch(`/todos/${id}`,{status})
    } catch (error) {
        throw error(error.message)
    }
}

export const deleteTodo=async(id)=>{
try {
    return await api.delete(`todos/${id}`)
} catch (error) {
    throw error(error.message)
}
}

export const createTodo=async(todo)=>{
    try {
        return api.post('/todos',todo)
    } catch (e) {
        throw e (e.message)
    }
}