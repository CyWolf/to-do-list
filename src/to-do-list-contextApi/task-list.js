import React, { useContext } from 'react'
import { Context } from '../store/appContext'

function TaskList() {

    const { store, actions } = useContext(Context)
    
    return (
        <div className='mt-4'>
                <h6 className='ml-20'>Lista de tareas</h6>
                {store.taskUserArray.map((item) => {
                    return (
                        <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                            <div className="form-check">
                                <label className="form-check-label" for="defaultCheck1">
                                    <p>{item.task}</p>
                                    <h6 className='mt-3'>Asignado a: {item.user}</h6>
                                </label>
                            </div>

                            <div className='d-flex'>
                                <button type="button" className="btn btn-danger" onClick={() => { actions.deleteTask(item) }}>Borrar</button>
                                <button type="button" className="btn btn-warning" onClick={() => { actions.editTask(item) }}>Editar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default TaskList