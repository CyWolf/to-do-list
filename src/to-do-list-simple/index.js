import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navbar'
import AddTask from './add-task'
import TaskList from './task-list'

function TodoSimple() {

    const [task, setTask] = useState('')
    const [taskArray, setTaskArray] = useState([])
    //------------------------------------------------------------------
    const handleTask = (e) => {
        setTask(e.target.value)
    }
    //------------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = new Date().getTime()
        const newTask = {
            id: id,
            task: task
        }
        const concatArray = taskArray.concat(newTask)
        setTaskArray(concatArray)
        setTask('')
    }
    //------------------------------------------------------------------
    const deleteTask = (task) => {
        const filterTask = taskArray.filter((item) => {
            return item.id !== task.id
        })
        setTaskArray(filterTask)
    }
    //------------------------------------------------------------------

    return (
        <>
            <Navbar />
            <div className='div-list mx-auto mt-5 todolist-bg'>
                <Link to='/'>
                    <button type="button" className="btn btn-secondary mb-3">Back to home</button>
                </Link>
                < AddTask
                    handleSubmit={handleSubmit}
                    handleTask={handleTask}
                    task={task}
                />
                < TaskList
                    deleteTask={deleteTask}
                    taskArray={taskArray}
                />
            </div>
        </>
    )
}

export default TodoSimple