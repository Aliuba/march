import React, {useEffect, useReducer, useState} from 'react';
const initialstate=null
function reducer(state, action){
    switch (action.type){
        case "todo":{
            return action.payload
        }
        case "name":{
           return{...state,
                name:action.payload}
        }
        default: {
            console.log("error")
        }
    }

}
export default function App() {
    const [count, SetCount] = useState(1)
    const [inputValue, setValue]=useState("")
    const[state, dispatch]=useReducer(reducer, initialstate)
    const inc = () => {
        SetCount((val) => val + 1)
    }
    const res=()=>{
        SetCount(0)
    }
    const fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+ count)
            .then(response => response.json())
            .then(json => dispatch({type:"todo", payload: json }))


    }
    const nameChange=()=>{
        dispatch({type:"name", payload:inputValue })
    }
    useEffect(()=>{
        fetchData();
    }, [count])
    return (
        <div>
            <h1> count {count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={res}>res</button>
            <input value={inputValue} onChange={({target:{value}})=>setValue(value)}/>
            <button onClick={nameChange}>name</button>
            {!!state&&<div>{state.id}--{state.name}-{state.username}</div>}

        </div>
    );
}
