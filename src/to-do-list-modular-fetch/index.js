import React, { useState } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'

import Navbar from './navbar'
import Login from './login'
import Task from './task'
import TaskList from './task-list'

function TodoModularFetch() {

    const history = useHistory()

    const [user, setUser] = useState('')
    const [task, setTask] = useState('')
    const [userTaskArray, setUserTaskArray] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [currentUserTask, setCurrentUserTask] = useState({})
    const [taskDone, setTaskDone] = useState([])
    //------------------------------------------------------------------
    const handleUser = (e) => {
        setUser(e.target.value)
    }
    const handleTask = (e) => {
        setTask(e.target.value)
    }
    //------------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            const newTaskUserList = userTaskArray.map((item) => {
                if (item.id === currentUserTask.id) {
                    const newUserTask = {
                        date: currentUserTask.date,
                        id: currentUserTask.id,
                        user: user,
                        task: task
                    }
                    return newUserTask
                } else {
                    return item
                }
            })
            setUserTaskArray(newTaskUserList)
            setTask('')
            setUser('')
            setIsEdit(false)
            setCurrentUserTask({})
            history.push('//')
        } else {
            const id = new Date().getTime()
            const date = new Date().toString()
            const newUserTask = {
                date: date,
                id: id,
                user: user,
                task: task
            }
            const concatTaskUserArray = userTaskArray.concat(newUserTask)
            setUserTaskArray(concatTaskUserArray)
            setUser('')
            setTask('')
            history.push('//')
        }
    }
    //------------------------------------------------------------------
    const editTask = (task) => {
        setUser(task.user)
        setTask(task.task)
        setIsEdit(true)
        setCurrentUserTask(task)
    }
    //------------------------------------------------------------------
    const deleteTask = (task) => {
        const taskUserDelete = userTaskArray.filter((arrayPosition) => {
            return arrayPosition.id !== task.id
        })
        setUserTaskArray(taskUserDelete)
    }
    //------------------------------------------------------------------
    const userTaskDone = (task) => {
        deleteTask(task)
        const doneConcatTaskUserArray = taskDone.concat(task)
        setTaskDone(doneConcatTaskUserArray)
    }
    //------------------------------------------------------------------
    const deleteTask2 = (task) => {
        const taskUserDelete2 = taskDone.filter((arrayPosition) => {
            return arrayPosition.id !== task.id
        })
        setTaskDone(taskUserDelete2)
    }
    //------------------------------------------------------------------
    const returnToBackLog = (task) => {
        deleteTask2(task)
        const doneConcatTaskUserArray = userTaskArray.concat(task)
        setUserTaskArray(doneConcatTaskUserArray)
    }
    //------------------------------------------------------------------

    return (
        <>
            <Navbar />
            <div className='div-list mx-auto mt-5 todolist-bg'>
                <Link to='/'>
                    <button type="button" className="btn btn-secondary mb-3">Back to home</button>
                </Link>
                <Switch>
                    < Route path='./TodoModularFetch/Login'>
                        < Login 
                        />
                    </Route>
                    < Route path='/TodoModularFetch/Task'>
                        <Task
                            handleUser={handleUser}
                            handleTask={handleTask}
                            handleSubmit={handleSubmit}
                            user={user}
                            task={task}
                        />
                    </Route>

                    < Route path='/TodoModularFetch/TaskList'>
                        <TaskList
                            editTask={editTask}
                            deleteTask={deleteTask}
                            userTaskDone={userTaskDone}
                            deleteTask2={deleteTask2}
                            returnToBackLog={returnToBackLog}
                            userTaskArray={userTaskArray}
                            taskDone={taskDone}
                        />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default TodoModularFetch