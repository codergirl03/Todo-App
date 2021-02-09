import React from "react";

function Form({ setInputText , setTodos , todos ,inputText ,setStatus}){

    const setTaskHandle = (e) =>{
       setInputText(e.target.value)
    }
    const setTodosHandler = (e) =>{
        e.preventDefault();
        setTodos(
            [   ...todos ,
                   {text: inputText ,
                     completed:false ,
                      id: Math.random()*1000}
            ]
        );
        setInputText("");
       };

    const statusHandler =(e) =>{
        setStatus(e.target.value);
    }   
   return (
    <form>
        <input onChange ={setTaskHandle} value={inputText} type="text" className= "todo-input"></input>
        <button onClick= {setTodosHandler} className= "todo-button" type="submit">
        <span>Add</span>
        </button>
        <div className= "select">
            <select onChange= {statusHandler} name="todo" id ="todo-select">
                <option value= "all">All</option>
                <option value= "completed">Completed</option>
                <option value= "uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
);
}

export default Form;