import { useFormik } from 'formik'
import React from 'react'
import { Input, Button } from "@chakra-ui/react";

const AddTodo = () => {
    // const values=useFormik({
    //     initialValues:{
    //         task:"",
    //         status:"Todo",
    //         days:0,
    //         hours:0,
    //         assignee:"",
    //         priority:""

    //     },
    //     onSubmit:(event)=>{
    //         event.preventDefault()
    //         console.table(event.values)}
    // })

    const formik = useFormik({
        initialValues: {
            task:"",
                    status:"Todo",
                    days:0,
                    hours:0,
                    assignee:"",
                    priority:""
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })
  return (
    <div className='w-full border '>
      {/* <form onSubmit={values.onSubmit}>
        <label className='px-2 py-1 m-auto' htmlFor="task" placeholder='Enter Task '>Task Name</label>
        <input type="text"         onChange={values.handleChange}
name="task" required id="" value={values.task} />
        <br />
        <label className='px-2 py-1 m-auto' htmlFor="Status">Status</label>
        <select  onChange={values.handleChange} name="status" value={values.status} id="">
            <option className='bg-red-400' value="Todo">To do</option>
            <option className='bg-orange-400' value="In-Progress">In-Progress</option>
            <option className='bg-green-400' value="Completed">Completed</option>

        </select>
        <br />

        <label className='px-2 py-1 m-auto' htmlFor="Story Points">Story Points</label>
        <input  onChange={values.handleChange} type="number" name="days" placeholder='days'  value={values.days}/>
        <input  onChange={values.handleChange} type="number" name="hours" placeholder='hours' value={values.hours}/>
        <br />
        <label className='px-2 py-1 m-auto' htmlFor="assignee">Assignee</label>
        <input  onChange={values.handleChange} type="text" name="assignee" value={values.assignee} id="" />
                <br />
                <label className='px-2 py-1 m-auto' htmlFor="priority">Priority</label>
                <select  onChange={values.handleChange} name="priority" value={values.priority} id="">
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>

                </select>
                <br />
            <Center>                <input type="submit" value={"Add Todo"} name="" id="" />
</Center>

      </form> */}



    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email Address</label>
      <Input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Button type='submit'>Submit</Button>
    </form>      
    </div>
  )
}

export default AddTodo