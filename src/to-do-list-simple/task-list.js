import React from 'react'

function TaskList(props) {

    const {deleteTask, taskArray} = props

    return (
        <>
            {taskArray.map((task) => {
                return (
                    <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                        <div className="form-check ml-2">
                            <label className="form-check-label" for="defaultCheck1">
                                {task.task}
                            </label>
                        </div>
                        <button onClick={() => { deleteTask(task) }} type="button" className="btn btn-danger">Borrar</button>
                    </div>
                )
            })}
        </>
    )
}

export default TaskList