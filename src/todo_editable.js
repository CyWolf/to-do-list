import React, { useState } from 'react'

function TodoEditable() {

    const [user, setUser] = useState('')
    const [task, setTask] = useState('')
    const [taskUserArray, setTaskUserArray] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [currentUserTask, setCurrentUserTask] = useState({})
    //---------------------------------------------------------------------------
    const handleUser = (e) => {
        setUser(e.target.value)
    }
    const handleTask = (e) => {
        setTask(e.target.value)
    }
    //---------------------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            const newTaskUserList = taskUserArray.map((item) => {
                if (item.id === currentUserTask.id) {
                    const newUserTask = {
                        id: currentUserTask.id,
                        user: user,
                        task: task
                    }
                    return newUserTask
                } else {
                    return item
                }
            })
            setTaskUserArray(newTaskUserList)
            setTask('')
            setUser('')
            setIsEdit(false)
            setCurrentUserTask({})
        } else {
            const id = new Date().getTime()
            const newUserTask = {
                id: id,
                user: user,
                task: task
            }
            const concatTaskUserArray = taskUserArray.concat(newUserTask)
            setTaskUserArray(concatTaskUserArray)
            setUser('')
            setTask('')
        }
    }
    //------------------------------------------------------------------
    const deleteTask = (task) => {
        const taskUserDelete = taskUserArray.filter((arrayPosition) => {
            return arrayPosition.id !== task.id
        })
        setTaskUserArray(taskUserDelete)
    }
    //------------------------------------------------------------------
    const editTask = (task) => {
        setUser(task.user)
        setTask(task.task)
        setIsEdit(true)
        setCurrentUserTask(task)
    }

    return (
        <div className='div-list mx-auto mt-5 todolist-bg'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleUser} value={user} />
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={task} />
                    <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
                </div>
            </form>

            <div className='mt-4'>
                <h6 className='ml-20'>Lista de tareas</h6>
                {taskUserArray.map((item) => {
                    return (
                        <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                            <div className="form-check">
                                <label className="form-check-label" for="defaultCheck1">
                                    <p>{item.task}</p>
                                    <h6 className='mt-3'>Asignado a: {item.user}</h6>
                                </label>
                            </div>

                            <div className='d-flex'>
                                <button type="button" className="btn btn-danger" onClick={() => { deleteTask(item) }}>Borrar</button>
                                <button type="button" className="btn btn-warning" onClick={() => { editTask(item) }}>Editar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoEditable