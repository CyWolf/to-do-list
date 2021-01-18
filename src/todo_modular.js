import React, { useState } from 'react'

function TodoModular() {

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
        <div className='div-list mx-auto mt-5 todolist-bg'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleUser} value={user} />
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={task} />
                    <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
                </div>
            </form>

            <div className='d-flex justify-content-between'>

                <div className='mt-4 div-user-task'>
                    <h6 className='ml-20'>Por hacer</h6>

                    {userTaskArray.map((item) => {
                        return (
                            <>
                                <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                                    <div className="form-check">
                                        <label className="form-check-label" for="defaultCheck1">
                                            <p><stron>Nombre: </stron>{item.user}</p>
                                            <p><stron>Tarea: </stron>{item.task}</p>
                                            <p><stron>Fecha: </stron>{item.date}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="button" className="btn btn-danger" onClick={() => { deleteTask(item) }}>Borrar</button>
                                    <button type="button" className="btn btn-primary ml-1" onClick={() => { editTask(item) }}>Editar</button>
                                    <button type="button" className="btn btn-success ml-1" onClick={() => { userTaskDone(item) }}>Hecho</button>
                                </div>
                            </>
                        )
                    })}
                </div>

                <div className='mt-4 div-user-task'>
                    <h6 className='ml-20'>Hecho</h6>

                    {taskDone.map((item) => {
                        return (
                            <>
                                <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                                    <div className="form-check">
                                        <label className="form-check-label" for="defaultCheck1">
                                            <p><stron>Nombre: </stron>{item.user}</p>
                                            <p><stron>Tarea: </stron>{item.task}</p>
                                            <p><stron>Fecha: </stron>{item.date}</p>
                                        </label>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="button" className="btn btn-danger" onClick={() => { deleteTask2(item) }}>Borrar</button>
                                    <button type="button" className="btn btn-primary ml-1" onClick={() => { returnToBackLog(item) }}>Volver</button>
                                </div>
                            </>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default TodoModular