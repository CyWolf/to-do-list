import React from 'react'
import { Link } from 'react-router-dom'

function Task() {
    return (
        <form>
            <div>
                <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <Link to='TodoModular/TaskListModular'>
                    <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
                </Link>
            </div>
        </form>
    )
}

export default Task