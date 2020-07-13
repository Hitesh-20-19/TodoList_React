import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import { BsPencil} from 'react-icons/bs'
import { BsTrash} from 'react-icons/bs'

export default class Todoitem extends Component {

   

    render() {
        const{title,handleDelete,handleEdit} = this.props
        const variants=["primary","secondary","success","danger","warning","info","light","dark"]
        return (
            <div>
                <ListGroup.Item className="d-flex my-2 justify-content-between" variant={variants[Math.floor(Math.random() * variants.length)]}>
                    <h6>{title}</h6>
                    <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <BsPencil/>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <BsTrash/>
                    </span>
                    </div>
                </ListGroup.Item>
                
    
                
            </div>
        )
    }
}
