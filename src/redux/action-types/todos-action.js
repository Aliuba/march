export const fetchTodos=(dispatch)=>{
    try{    fetch
    ('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dispatch({type:"Todos", payload:json}))
        }
        catch (e) {
           console.log(e)
        }
}
