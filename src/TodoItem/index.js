import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css';

function TodoItem(props) 
{
    return (
        <li className="TodoItem" >
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                onClick={props.onCompleted} >
                <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}  >
                {props.text}
            </p>
            <span className="Icon Icon-delete" 
                onClick={props.onDelete} >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
        </li>
    );
}

export {
    TodoItem,
};