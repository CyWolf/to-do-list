import React, { useState } from 'react'

function TodoEditable() {

    return (
        <div className='div-list mx-auto mt-5 todolist-bg'>
            <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group mb-3">
                <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="submit" id="button-addon2">Agregar</button>
                </div>
            </div>

            <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                <div className="form-check ml-2">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        tarea1
                            </label>
                </div>
                <div className='d-flex'>
                    <button type="button" className="btn btn-danger">Borrar</button>
                    <button type="button" className="btn btn-secondary ml-1">Editar</button>
                </div>
            </div>
        </div>
    )
}

export default TodoEditable