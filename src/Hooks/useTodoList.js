import { useEffect, useReducer } from "react"
import { reduceTarea } from "../reduces/reduceTarea";

const init = () => {

    return JSON.parse(localStorage.getItem('Tareas')) || [];

}

export const useTodoList = () => {

    const [tareas, dispatch] = useReducer(reduceTarea, [], init)

    useEffect(() => {
        localStorage.setItem("Tareas", JSON.stringify(tareas))
    }, [tareas])


    const handleNewTodo = (newTarea) => {
        const action = {
            type: '[TAREA]add tarea',
            payload: newTarea
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {

        const action = {
            type: '[TAREA] delete tarea',
            payload: id
        }

        dispatch(action)

    }

    const handleChangeDone = (id) => {
        const action = {
            type: '[TAREA] toogler tarea',
            payload: id
        }


        dispatch(action)
    }
    return {
        handleNewTodo,
        handleDeleteTodo,
        handleChangeDone,
        tareas
    }
}
