import React from 'react';
import { useState } from 'react';


const ToDoList = () => {
    const toggle = () => setModal(!modal)
    const [modal, setModal] = useState(false);
    

    return (
        <>
        <div className='header'>
            <h1> ToDo List</h1>
            <button onClick={toggle}>Add task</button>
        </div>
        <div className = "task-container">
            <form>
                <input type ="text" placeholder='title'/>
                <input type ="text" placeholder='description'/>
                <input type ="date" placeholder='duedate'/>

            </form>
        </div>
        </>
    );
}

export default ToDoList;