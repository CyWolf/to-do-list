import React from 'react'

function AddTask(props) {

    const {handleSubmit, handleTask, task} = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTask} value={task} />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit" id="button-addon2">Agregar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTask