import { useState } from "react";
import "./todoapp.css";

import { v4 as uuidv4 } from 'uuid';


function ToDo() {

    let [Todos, setTodos] = useState([]);
    let [newTodo, setnewTodo] = useState("");

    function addTask() {
        if (newTodo.trim() === '') return; // Prevent adding empty tasks
        setTodos([...Todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setnewTodo(''); // Clear the input field after adding a task
        console.log("Adding task.");
    }


    function updateTaskValue(event) {
        console.log(event.target.value);
        setnewTodo(event.target.value);
    }


    let deleteTodo = (id) => {
        let copy = Todos.filter((todo) => todo.id != id);
        setTodos(copy);
        console.log(copy);
    }


    let upperCaseAll = () => {
        setTodos((preTodos) => (

            preTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })

        ));
    };



    /* This is my way of doing */
    // let markAsDone = (id) => {
    //     setTodos((preTodos) => (
    //         preTodos.map((task) => {
    //             if (task.id === id) {
    //                 // Increment the clicked counter

    //                 if (task.isDone == false) {

    //                     return {
    //                         ...task,
    //                         isDone: true
    //                     }
    //                 } else {
    //                     return {
    //                         ...task,
    //                         isDone: false
    //                     }
    //                 }

    //             } else {
    //                 return task;
    //             }
    //         })

    //     ));
    //     console.log(Todos);
    // }

    /* Smart and easy way of doing this */
    let markAsDone = (id) => {
        setTodos((preTodos) => (
            preTodos.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        isDone: !task.isDone // Toggle the isDone status
                    };
                }
                return task;
            })
        ));
    }




    // function editTask(id) {
    //     const newTodoObj = Todos.map((task) => {
    //         if (task.id === id) {
    //             // Increment the clicked counter
    //             setnewTodo(...task, ta);
    //             return c + 1;
    //         } else {
    //             // The rest haven't changed
    //             return c;
    //         }
    //     });
    //     setCounters(nextCounters);
    // }



    return (
        <>
            <div className="TodoContainer">
                <h2>Todo</h2>
                <div>
                    <input id="input" type="text" value={newTodo} onChange={updateTaskValue} placeholder="Write you task...." />
                    <button id="addButton" onClick={addTask}>Add Task</button>
                </div>
                <div className="taskContainer">
                    <p>Tasks to do</p>
                    <ul>
                        {
                            Todos.map((todo) => (
                                <div>
                                    <li key={todo.id} id="listItem">
                                        <input type="checkBox" id="inputCheckBox" onClick={() => markAsDone(todo.id)} />
                                        <span className={todo.isDone ? 'doneTask' : ''} >{todo.task}</span>
                                        <button id="deleteButton" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <button onClick={upperCaseAll}>Upper Case All</button>
            </div>
        </>
    );
}
export default ToDo;





{/* <li id="listItem">
    <input type="checkBox" id="inputCheckBox" checked={todo.isDone} onChange={() => markAsDone(todo.id)} />
    <span className={todo.isDone ? 'doneTask' : ''}>
        {todo.task}
    </span>
    <button id="deleteButton" onClick={() => deleteTodo(todo.id)}>Delete</button>
</li> */}