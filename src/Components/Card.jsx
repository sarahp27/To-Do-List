import React, { useState } from 'react';
import EditTask from '../Modals/EditTask';

const Card = ({taskObj,index,deleteTask, editTasks}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    const handleDelete = () => {
        deleteTask(index);
    }

     const editTask = (obj) =>
     {
        editTasks(obj, index)
     }

    return (
        <div className='cardWrapper mr-5'>
            <div className='cardTop' style={{"backgroundColor":"green"}}></div>
                <div className='taskHolder'>
                <p className='cardHeader' style={{color:"black", marginTop:"5px",fontSize:"17px",borderRadius:"10px"}}> {taskObj.Name}    </p>         
                <p className='cardDescription' style={{color:"black"}}>{taskObj.Description}</p>
                <p className='cardDescription'style={{color:"black"}}>{taskObj.DueDate}</p>
               
                <div style={{"position": "absolute", "right":"20px","bottom":"20px"}}>
                     <button onClick={()=> setModal(true)} style={{"backgroundColor":"orange", "margin":"4px","fontSize":"20px","border":"0"}}>Edit</button>
                    <button onClick={handleDelete} style={{"backgroundColor":"orange","fontSize":"20px","border":"0"}}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} editTask = {editTask} taskObj = {taskObj}/>
            </div>
    )};
            

export default Card;
