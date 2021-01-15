import React from 'react'
import TodoEditable from './todo_editable'
import Navbar from './navbar'
import Footer from './footer'
import TodoSimple from './todo_simple'
import Todoeditar from './todoeditar'
import TodoModular from './todo_modular'

function Layout() {
  return (
    <>
    < Navbar />
    < TodoModular />
    < Footer />
    </>
  )
}

export default Layout