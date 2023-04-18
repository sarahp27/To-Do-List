import React, { useEffect } from 'react';
import { useState } from 'react';
import CreateTask from '../Modals/CreateTask';
import Card from './Card';

const ToDoList = () => {
    const toggle = () => setModal(!modal)
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let array = localStorage.getItem("taskList")
        
        if (array){
            let obj = JSON.parse(array)
            setTaskList(obj)
        }
    },[])

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON. stringify(tempList))
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
            {taskList.map((obj) => <Card taskObj/>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save= {saveTask}/>
        </>
    );
}

export default ToDoList;