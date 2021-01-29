const getState = ({ getStore, setStore, getActions }) => {

    return {
        store: {
            user: '',
            task: '',
            taskUserArray: [],
            isEdit: false,
            currentUserTask: {},
        },

        actions: {
            handleSubmit: (e) => {
                e.preventDefault()
                const store = getStore()
                if (store.isEdit) {
                    const store = getStore()
                    const newTaskUserList = store.taskUserArray.map((item) => {
                        if (item.id === store.currentUserTask.id) {
                            const newUserTask = {
                                id: store.currentUserTask.id,
                                user: store.user,
                                task: store.task
                            }
                            return newUserTask
                        } else {
                            return item
                        }
                    })
                    setStore({
                        taskUserArray: newTaskUserList,
                        user: '',
                        task: '',
                        isEdit: false,
                        currentContacts: {},
                    })
                } else {
                    const id = new Date().getTime()
                    const store = getStore()
                    const newUserTask = {
                        id: id,
                        user: store.user,
                        task: store.task
                    }
                    const concatTaskUserArray = store.taskUserArray.concat(newUserTask)
                    setStore({
                        taskUserArray: concatTaskUserArray,
                        user: '',
                        task: '',
                    })
                }
            },
            //------------------------------------------------------------------
            handleUser: (e) => {
                setStore({user: e.target.value})
            },
            //------------------------------------------------------------------
            handleTask: (e) => {
                setStore({task: e.target.value})
            },
            //------------------------------------------------------------------
            deleteTask: (task) => {
                const store = getStore()
                const taskUserDelete = store.taskUserArray.filter((arrayPosition) => {
                    return arrayPosition.id !== task.id
                })
                setStore({
                    taskUserArray: taskUserDelete,
                })
            },
            //------------------------------------------------------------------
            editTask: (task) => {
                setStore({
                    user: task.user,
                    task: task.task,
                    isEdit: true,
                    currentUserTask: task,
                })
            },
        }
    }
}
export default getState