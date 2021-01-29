import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='div-login'>
            <h4>Member login</h4>
                    <input required type="text" className="form-control" placeholder="Escribe tu usuario aquí" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input required type="text" className="form-control" placeholder="Escribe una tarea aquí" aria-label="Recipient's username" aria-describedby="button-addon2"  />
                    <Link to='TodoModularFetch/TaskList'>
                        <button type="submit" className="button-add-ut btn btn-success">Login</button>
                    </Link>
        </div>
    )
}

export default Login