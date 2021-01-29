import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navbar'
import AddUserTask from './add-user-task'
import TaskList from './task-list'


function TodoEditable() {

    return (
        <>
            <Navbar />
            <div className='div-list mx-auto mt-5 todolist-bg'>
                <Link to='/'>
                    <button type="button" className="btn btn-secondary mb-3">Back to home</button>
                </Link>
                <AddUserTask />
                <TaskList />
            </div>
        </>
    )
}

export default TodoEditable