import React, { useState } from 'react'

function TodoSimple() {

    const [isTask, setIsTask] = useState('')
    const [isTaskArray, setIsTaskArray] = useState([])
    //------------------------------------------------------------------
    const handleTask = (e) => {
        setIsTask(e.target.value)
    }
    //------------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = new Date().getTime()
        const newTask = {
            id: id,
            task: isTask
        }
        const concatArray = isTaskArray.concat(newTask)
        setIsTaskArray(concatArray)
        setIsTask('')
        console.log(concatArray)
    }
    //------------------------------------------------------------------
    const deleteTask = (tasklist) => {
        const filterTask = isTaskArray.filter((item) => {
            return item.task !== tasklist
        }
        )
        setIsTaskArray(filterTask)
    }
    return (
        <div className='div-list mx-auto mt-5 todolist-bg'>
            <form onSubmit={handleSubmit} className>
                <div className="input-group mb-3">
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={isTask} />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit" id="button-addon2">Agregar</button>
                    </div>
                </div>
            </form>

            {isTaskArray.map((tasklist) => {
                return (
                    <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                        <div className="form-check ml-2">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label className="form-check-label" for="defaultCheck1">
                                {tasklist.task}
                            </label>
                        </div>
                        <button onClick={() => { deleteTask(tasklist.task) }} type="button" className="btn btn-danger">Borrar</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoSimple