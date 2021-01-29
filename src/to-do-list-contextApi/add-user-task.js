import React, { useContext } from 'react'
import { Context } from '../store/appContext'

function AddUserTask() {

    const { store, actions } = useContext(Context)

    return (
        <form onSubmit={actions.handleSubmit}>
            <div>
                <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={actions.handleUser} value={store.user} />
                <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={actions.handleTask} value={store.task} />
                <button type="submit" className="button-add-ut btn btn-success">Agregar</button>
            </div>
        </form>
    )
}

export default AddUserTask