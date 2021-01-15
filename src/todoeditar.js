import React, { useState } from 'react'

function Todoeditar() {
	//Logica para ejercicio con boton de guardar reutilizado
	const [task, setTask] = useState('')
	const [name, setName] = useState('')
	const [isEdit, setIsEdit] = useState(false)
	const [currentTask, setCurrentTask] = useState({})
	const [tareas, setTareas] = useState([])

	const handleChangeTask = (e) => {
		setTask(e.target.value)
	}

	const handleChangeName = (e) => {
		setName(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (isEdit) {
			const newTaskList = tareas.map((item) => {
				if (item.id === currentTask.id) {
					const newtask = {
						id: currentTask.id,
						task: task,
						name: name
					}
					return newtask
				} else {
					return item
				}
			})
			setTareas(newTaskList)
			setTask('')
			setName('')
			setIsEdit(false)
			setCurrentTask({})
		} else {
			const id = new Date().getTime()
			const newtask = {
				id: id,
				task: task,
				name: name
			}
			const concatArray = tareas.concat(newtask)
			setTareas(concatArray)
			setTask('')
			setName('')
		}
	}

	const deleteTask = (item) => {
		const tareasFiltradas = tareas.filter((tarea) => {
			return tarea.task !== item.task
		})
		setTareas(tareasFiltradas)
	}

	const setEditTask = (task) => {
		setTask(task.task)
		setName(task.name)
		setIsEdit(true)
		setCurrentTask(task)
	}

	//Logica para ejercicio con boton de editar propio
	const [task2, setTask2] = useState('')
	const [name2, setName2] = useState('')
	const [isEdit2, setIsEdit2] = useState(false)
	const [currentTask2, setCurrentTask2] = useState({})
	const [tareas2, setTareas2] = useState([])

	const handleChangeTask2 = (e) => {
		setTask2(e.target.value)
	}

	const handleChangeName2 = (e) => {
		setName2(e.target.value)
	}

	const handleSubmit2 = (e) => {
		e.preventDefault()
		const id = new Date().getTime()
		const newtask = {
			id: id,
			task: task2,
			name: name2
		}
		const concatArray = tareas2.concat(newtask)
		setTareas2(concatArray)
		setTask2('')
		setName2('')
	}

	const deleteTask2 = (item) => {
		const tareasFiltradas = tareas2.filter((tarea) => {
			return tarea.task !== item.task
		})
		setTareas2(tareasFiltradas)
	}

	const setEditTask2 = (task) => {
		setTask2(task.task)
		setName2(task.name)
		setIsEdit2(true)
		setCurrentTask2(task)
	}

	const editTask2 = () => {
		const newTaskList = tareas2.map((item) => {
			if (item.id === currentTask2.id) {
				const newtask = {
					id: currentTask2.id,
					task: task2,
					name: name2
				}
				return newtask
			} else {
				return item
			}
		})
		setTareas2(newTaskList)
		setTask2('')
		setName2('')
		setIsEdit2(false)
		setCurrentTask2({})
	}

	return (
		<>
			<h2 className='text-success'>Todo list reutilizando el boton de guardar</h2>
			<form onSubmit={handleSubmit}>
				<p>Nombre</p>
				<input required onChange={handleChangeTask} value={task} className='d-block' />
				<p>Tarea</p>
				<input required onChange={handleChangeName} value={name} />
				<button type='submit'>Guardar</button>
			</form>

			{tareas.map((item) => {
				return (
					<>
						<p>{item.name}</p>
						<p>{item.task}</p>
						<button onClick={() => { deleteTask(item) }}>
							eliminar
							</button>
						<button onClick={() => setEditTask(item)}>
							editar
						</button>
					</>
				)
			})}
			{/*............................................................................*/}
			<h2 className='text-success'>Todo list utilizando boton de editar a parte del de guardar</h2>
			<form onSubmit={handleSubmit2}>
				<p>Nombre</p>
				<input required onChange={handleChangeTask2} value={task2} className='d-block' />
				<p>Tarea</p>
				<input required onChange={handleChangeName2} value={name2} />
				{isEdit2 ?
					<button type='button' onClick={editTask2}>Editar</button>
					:
					<button type='submit'>Guardar</button>
				}
			</form>

			{tareas2.map((item) => {
				return (
					<>
						<p>{item.name}</p>
						<p>{item.task}</p>
						<button onClick={() => { deleteTask2(item) }}>
							eliminar
							</button>
						<button onClick={() => setEditTask2(item)}>
							editar
						</button>
					</>
				)
			})}
		</>
	)
}

export default Todoeditar