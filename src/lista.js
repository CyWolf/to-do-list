import React, { useState } from 'react'

function Lista() {

    const [isTask, setIsTask] = useState()
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
    }
    return (
            <div className='div-list mx-auto mt-5 todolist-bg'>
                <form onSubmit={handleSubmit} className>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={isTask} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="submit" id="button-addon2">Agregar</button>
                        </div>
                    </div>
                </form>

                <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                    <div className="form-check ml-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            {isTask}
                        </label>
                    </div>
                    <p className='mt-3'>01/01/2021</p>
                    <button type="button" className="btn btn-danger">Borrar</button>
                </div>
                <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                    <div className="form-check ml-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            Default checkbox
                    </label>
                    </div>
                    <p className='mt-3'>01/01/2021</p>
                    <button type="button" className="btn btn-danger">Borrar</button>
                </div>
                <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                    <div className="form-check ml-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            Default checkbox
                    </label>
                    </div>
                    <p className='mt-3'>01/01/2021</p>
                    <button type="button" className="btn btn-danger">Borrar</button>
                </div>
            </div>
    )
}

export default Lista