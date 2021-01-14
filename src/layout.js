import React from 'react'
import TodoEditable from './todo_editable'
import Navbar from './navbar'
import Footer from './footer'
import TodoSimple from './todo_simple'

function Layout() {
  return (
    <>
    < Navbar />
    < TodoEditable />
    < Footer />
    </>
  )
}

export default Layout