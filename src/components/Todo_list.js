import React, { Component } from 'react'
import TodoItem from './Todoitem'
import {ListGroup, Button} from 'react-bootstrap'

export default class Todo_list extends Component {
    render() {
        const {items,clear,handleDelete,handleEdit} = this.props
        return (
            <div style={{paddingTop:"5%"}}>
                <ListGroup>
                    <h2 className="text-capitalize text-center">Todo List</h2>
                    {items.map(item=>{
                        return <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>
                    })}
                    <Button variant="danger" size="lg" block style={{marginTop:"2%",marginBottom:"5%"}} onClick={clear}>
                        Clear List
                    </Button>
                </ListGroup>
            </div>
        )
    }
}
