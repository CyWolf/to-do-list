import React from 'react'

function Lista() {
    return (
        <div className='div-list mx-auto mt-3'>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Writte some stuff to do" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" id="button-addon2">Add</button>
                </div>
            </div>

            <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                <div className="form-check ml-2">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
                <p className='mt-3'>01/01/2021</p>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
            <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                <div className="form-check ml-2">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
                <p className='mt-3'>01/01/2021</p>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
            <div className='d-flex align-items-center div-stuff justify-content-between border mt-2'>
                <div className="form-check ml-2">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
                <p className='mt-3'>01/01/2021</p>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div> 
    )
}

export default Lista