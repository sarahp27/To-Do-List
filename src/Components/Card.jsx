import React, { useState } from 'react';
import EditTask from '../Modals/EditTask'

import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';


const Card = ({taskObj,index,deleteTask}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    const handleDelete = () => {
        deleteTask(index);
    }

    return (
        <div className='cardWrapper mr-5'>
            <div className='cardTop' style={{"backgroundColor":"chartreuse"}}></div>
                <div className='taskHolder'>
                <span className='cardHeader' style={{"backgroundColor": "F2FAF1", "borderRadius":"10px"}}>{taskObj.Name}</span>
                <p>{taskObj.Description}</p>
                <p>{taskObj.DueDate}</p>

                <div style={{"position": "absolute", "right":"20px","bottom":"20px"}}>
                    <i className='far fa-edit mr-3'  style={{"color":"#5DC250" }} onClick={()=> setModal(true)} ></i>
                    <i className='fas fa-trash alt' style={{"color":"#5DC250"}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask  toggle={toggle} modal={modal} edit= {EditTask}/>
            </div>
    );


};

export default Card;