import React, { Component } from 'react'
import TodoInput from './components/TotoInput'
import TodoList from './components/Todo_list'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {

  state={
    items:[],
    id:uuidv4(),
    item:'',
    editItem:false
  }

  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const newItem ={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id:uuidv4(),
      editItem:false
    })
  
  }

  clearList=()=>{
    this.setState({
      items:[]
    })
  }

  handleDelete=(id)=>{
    const filteredItems = this.state.items.filter(item=>item.id !== id)
    this.setState({
      items:filteredItems
    })
  }


  handleEdit=(id)=>{
    const filteredItems = this.state.items.filter(item=>item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
  }

  render() {
    return (
      <div>
        <Container>
        <Row>
        <Col></Col>
        <Col lg={8} xs={10}>
        <h2 className="text-capitalize text-center" style={{paddingTop:"5%"}}>Todo input</h2>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
        <TodoList items={this.state.items} clear={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        </Col>
        <Col></Col>
        </Row>
        </Container>
      </div>
    )
  }
}

