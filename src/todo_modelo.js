import React, { useState } from 'react'

function TodoEditable() {

    return (
        <div className='div-list mx-auto mt-5 todolist-bg'>
            <form>
                <div>
                    <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
                </div>
            </form>

            <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                <div className="form-check ml-2">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        tarea1
                            </label>
                </div>
                <button type="button" className="btn btn-danger">Borrar</button>
            </div>
        </div>
    )
}

export default TodoEditable