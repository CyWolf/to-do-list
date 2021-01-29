import React from 'react'
import { Link } from 'react-router-dom'

function Task(props) {

    const { handleSubmit, handleTask, handleUser, user, task } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleUser} value={user} />
                <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={task} />
                <Link to='TodoModular/TaskListModular'>
                    <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
                </Link>
            </div>
        </form>
    )
}

export default Task