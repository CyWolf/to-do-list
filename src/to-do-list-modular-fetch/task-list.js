import React from 'react'
import { Link } from 'react-router-dom'

function TaskList() {

    return (
        <div className='d-flex justify-content-between'>

            <div className='mt-4 div-user-task'>
                <h6 className='ml-20'>Por hacer</h6>
                <>
                    <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                        <div className="form-check">
                            <label className="form-check-label" for="defaultCheck1">
                                <p><stron>Nombre: </stron>Eliud</p>
                                <p><stron>Tarea: </stron>Ir al gym</p>
                                <p><stron>Fecha: </stron>03/11/2021</p>
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger">Borrar</button>
                        <button type="button" className="btn btn-primary ml-1">Editar</button>
                        <button type="button" className="btn btn-success ml-1">Hecho</button>
                    </div>
                </>
            </div>

            <div className='mt-4 div-user-task'>
                <h6 className='ml-20'>Hecho</h6>
                <>
                    <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                        <div className="form-check">
                            <label className="form-check-label" for="defaultCheck1">
                                <p><stron>Nombre: </stron>Eliud</p>
                                <p><stron>Tarea: </stron>Ir al gyn</p>
                                <p><stron>Fecha: </stron>03/11/2021</p>
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger">Borrar</button>
                        <button type="button" className="btn btn-primary ml-1">Volver</button>
                    </div>
                </>
            </div>
        </div>
    )
}

export default TaskList