import React from 'react';
import { useState } from 'react';
import CreateTask from '../Modals/CreateTask';

const ToDoList = () => {
    const toggle = () => setModal(!modal)
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList) 
        setModal(false)

    }

    return (
        <>
        <div className='header text-center'>
            <h1> ToDo List</h1>
            <button className='btn btn-primary mt-2' onClick = {() => setModal(true)}>Add task</button>
        </div>
        <div className = "task-container">
            {taskList.map((obj) => <li>{obj.Name}</li>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save= {saveTask}/>
        </>
    );
}

export default ToDoList;