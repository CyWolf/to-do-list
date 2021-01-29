import React, { useState } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'

import Navbar from './navbar'
import Login from './login'
import Task from './task'
import TaskList from './task-list'

function TodoModularFetch() {

    return (
        <>
            <Navbar />
            <div className='div-list mx-auto mt-5 todolist-bg'>
                <Link to='/'>
                    <button type="button" className="btn btn-secondary mb-3">Back to home</button>
                </Link>
                <Switch>
                    < Route path='/TodoModularFetch/Login'>
                        < Login />
                    </Route>
                    < Route path='/TodoModularFetch/Task'>
                        <Task />
                    </Route>
                    < Route path='/TodoModularFetch/TaskList'>
                        <TaskList />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default TodoModularFetch