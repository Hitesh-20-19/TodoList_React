import React, { Component } from 'react'
import {InputGroup,FormControl,Card,Button} from 'react-bootstrap'
import { FiAlignLeft} from "react-icons/fi";
import Img from './img.jpg'

export default class TotoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props
        return (
            <div style={{paddingTop:"2%"}}>
                        <Card>
                        <Card.Img variant="top" src={Img}/>
                        <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend > 
                            <InputGroup.Text style={{backgroundColor:"#d9d9d9"}} id="inputGroup-sizing-sm"><FiAlignLeft /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="default" aria-describedby="inputGroup-sizing-default" placeholder="Add Todo Item" value={item} onChange={handleChange}/>
                        </InputGroup>
                        <Button  size="lg" block onClick={handleSubmit} variant={editItem ? "success" :"info" } >
                            {editItem ? 'Edit Item' : 'Add Item'}
                        </Button>
                        </Card.Body>
                        </Card>
            </div>
        )
    }
}
