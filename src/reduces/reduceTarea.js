

export const reduceTarea = (state = [], action) => {

    switch (action.type) {

        case '[TAREA]add tarea':
            //console.log(state)
         
            return [...state, action.payload]
        // console.log(action)
        case '[TAREA] delete tarea':
            // console.log(action.payload)

            return state.filter(item => item.id != action.payload)
            
           

        case '[TAREA] toogler tarea':
            // console.log(action.payload)
            //Deacuerdo al id voy a dirigirme a la propiedad done, en la cual tengo que cambiar el false por un true y luego volver agregar dicho objeto al array con los otros objetos
    
            return (
                state.map((item)=>{
                    if(item.id === action.payload){
                        return {
                            ...item,
                            done:!item.done
                        }
                     
                    }
                    else{return item}
                })
            )
        default:
            return state

    }

}
