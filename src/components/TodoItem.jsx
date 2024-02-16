import React from 'react'

export const TodoItem = ({item,onDeleteTodo,onToggleTodo}) => {



    return (

        <li>
            <p
                name='parrafo'
                id='parrafo'
                className={item.done != true ? "pendiente" : "SinColor"}>
                {item.tarea}:{item.descripcion}
            </p>
            <button onClick={() => onToggleTodo(item.id)} className='bt-pendiente'>Pendiente</button>
            <button onClick={() => onDeleteTodo(item.id)} className='bt-eliminar'>Eliminar</button>

        </li>

    )
}
