
import { useTodoList } from '../Hooks/useTodoList';
import { Form,TodoList } from './';

export const ViewGeneral = () => {
    
    const {handleNewTodo,handleDeleteTodo,handleChangeDone,tareas}=useTodoList()


    return (
        <div>
            <h1>Lista de tareas</h1>

           <Form onNewTodo={handleNewTodo}/>

            <TodoList tareas={tareas} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleChangeDone}/>

        </div>
    )
}

