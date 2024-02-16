import React from 'react'

export const Form = ({onNewTodo}) => {

const resetForm=(ev)=>{
    ev.target.tarea.value = ''
    ev.target.descripcion.value = ''
}

    const handlerSubmit = (ev) => {
        ev.preventDefault()

        const newTarea = {
            id: Date.now(),
            tarea: ev.target.tarea.value,
            descripcion: ev.target.descripcion.value,
            done: false,
        }

      onNewTodo(newTarea)

        resetForm(ev)
     

    }
    return (
        <div>
            <p className='text'>Añadir tarea</p>
            <form onSubmit={handlerSubmit}>
                <input type="text" id='tarea' name='tarea' placeholder='Tarea' />
                <textarea name="descripcion" id="descripcion" placeholder='Descripcion ' rows="8" cols="20"></textarea>
                <button type='submit' className='bt-aniadir'>Añadir Tarea</button>
            </form>
        </div>
    )
}
