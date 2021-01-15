import React, { useState } from 'react'

function TodoModular() {

    return (
        <div className='div-list mx-auto mt-5 todolist-bg'>
            <form>
                <div>
                    <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
                </div>
            </form>

            <div className='d-flex justify-content-between'>

                <div className='mt-4 div-user-task'>
                    <h6 className='ml-20'>Por hacer</h6>
                    <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                        <div className="form-check">
                            <label className="form-check-label" for="defaultCheck1">
                                <p><stron>Nombre: </stron></p>
                                <p><stron>Tarea: </stron></p>
                                <p><stron>Fecha: </stron></p>
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger">Borrar</button>
                        <button type="button" className="btn btn-primary ml-1">Editar</button>
                        <button type="button" className="btn btn-success ml-1">Hecho</button>
                    </div>
                </div>

                <div className='mt-4 div-user-task'>
                    <h6 className='ml-20'>Hecho</h6>
                    <div className='d-flex align-items-center div-stuff justify-content-between align-items-baseline border mt-2'>
                        <div className="form-check">
                            <label className="form-check-label" for="defaultCheck1">
                                <p><stron>Nombre: </stron></p>
                                <p><stron>Tarea: </stron></p>
                                <p><stron>Fecha: </stron></p>
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger">Borrar</button>
                        <button type="button" className="btn btn-primary ml-1">Editar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoModular