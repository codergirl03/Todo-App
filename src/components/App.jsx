import React, {useState , useEffect} from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";
 

function App(){
    //state
    const [inputText , setInputText] = useState("");
    const [todos , setTodos] = useState([])
    const [status ,setStatus] = useState('All');
    const [filteredTodos , setFilteredTodos] =useState([])

    //use effect
    useEffect(() => {
        filterHandler();
    }, [todos , status] );

    //function
     const filterHandler = () => {
         switch (status){
             case "completed":
                 setFilteredTodos(todos.filter(todo => todo.completed === true))
                 break;
             case "uncompleted":
                 setFilteredTodos(todos.filter(todo => todo.completed === false))
                 break;    
             default: 
                  setFilteredTodos(todos);
                  break;    
         }
     }
    return(
        <div className= "container">
          <div className= "heading">
               <h1>To-Do list</h1>
          </div>
       <Form
          inputText = {inputText}
          setInputText = {setInputText}
          todos = {todos}
          setTodos= {setTodos}
          status = {status}
          setStatus = {setStatus}
       />
       <ToDoList 
          todos = {todos}
          setTodos= {setTodos}
          filteredTodos ={filteredTodos}
       />
        </div>   
    );
}

export default App;