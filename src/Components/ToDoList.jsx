import React from 'react';
import { useState } from 'react';
import CreateTask from '../Modals/CreateTask';

const ToDoList = () => {
    const toggle = () => setModal(!modal)
    const [modal, setModal] = useState(false);
    


    return (
        <>
        <div className='header text-center'>
            <h1> ToDo List</h1>
            <button className='btn btn-primary mt-2' onClick = {() => setModal(true)}>Add task</button>
        </div>
        <div className = "task-container">
            {/* <form>
                <input type ="text" placeholder='title'/>
                <input type ="text" placeholder='description'/>
                <input type ="date" placeholder='duedate'/>

            </form> */}

        </div>
        <CreateTask toggle={toggle} modal={modal} />
        </>
    );
}

export default ToDoList;