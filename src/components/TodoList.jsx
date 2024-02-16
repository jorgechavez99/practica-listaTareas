import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ tareas, onDeleteTodo, onToggleTodo  }) => {



    return (
        <div>
            <h2>Tareas</h2>
            <ul>
                {
                    tareas.map(item => (
                        <TodoItem key={item.id} item={item} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
                    ))

                }
            </ul>

        </div>
    )
}
