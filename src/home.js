import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className='text-center nav-text my-5'>Ejercicios: To-do-list</h1>
            
            <div className=''>

                <Link to='/TodoSimple'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">To do list-simple</button>
                </Link>

                <Link to='/TodoEditable'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">To do list-contextApi</button>
                </Link>

                <Link to='/TodoModular/AddUserTask'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">To do list useHistory</button>
                </Link>

                <Link to='/TodoModularFetch/Login'>
                    <button type="button" className="btn btn-dark mb-3 d-block mx-auto button-home">To do list fetch</button>
                </Link>

            </div>
        </>
    )
}

export default Home