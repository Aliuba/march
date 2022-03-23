const initialState={
    todos:[]
}


export const todos=(state=initialState, action)=>{
    switch (action.type){
        case "Todos": {
            return{
                ...state,
                todos:action.payload
            }
        }

        default:{
            return state
        }
    }
}
