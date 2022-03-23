import React, {Component, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./redux/action-types/todos-action";

export default function App(){
    const {counter, todos}=useSelector(({counter:{counter}, todos:{todos}})=>({counter, todos}))
    const dispatch=useDispatch();
    const inc=()=>{
        dispatch({type:"INC"})
    }
    const dec=()=>{
        dispatch({type:"DEC"})
    }
    const res=()=>{
        dispatch({type:"RES"})
    }
    // const fetchData=()=>{
    //     try{    fetch
    // ('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => dispatch({type:"Todos", payload:json}))
    //     }
    //     catch (e) {
    //        console.log(e)
    //     }
    // }


    useEffect(()=>{fetchTodos(dispatch)}, [])
return(
<div>
    <h1>counter{counter}</h1>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    <button onClick={res}>res</button>
    {todos.map(todos=><h1>{todos.id}--{todos.title}</h1>)}
</div>
);
}
