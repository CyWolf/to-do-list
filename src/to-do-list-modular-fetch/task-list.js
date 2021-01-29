import React from 'react'
import { Link } from 'react-router-dom'

function TaskList(props) {

    const {editTask, deleteTask, userTaskDone, deleteTask2, returnToBackLog, userTaskArray, taskDone} = props

    return (
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
    )
}

export default TaskList