import React from 'react';

const ToDoList = () => {
    const toggle = () => setModal(!modal)

    return (
        <>
        <div className='header'>
            <h1> ToDo List</h1>
            <button onClick={toggle}>Add task</button>
        </div>

        </>
    );
}

export default ToDoList;