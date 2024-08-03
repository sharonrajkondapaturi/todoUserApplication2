import { Component } from "react";
import axios from 'axios'
import Cookies from 'js-cookie'
import { Background, TodoForm,TodoText,TodoInput, TodoLabel, AddTodo, SelectPriority, OptionPriority,Heading} from "./styledComponents";

// to add New TodoList using Class Component
class AddTask extends Component{
    state={todo:'',priority:'LOW',description:'',status:'Unaccomplished'}

    onTodo = event=>{
        this.setState({todo:event.target.value.toUpperCase()})
    }
    onPriority = event=>{
        this.setState({priority:event.target.value.toUpperCase()})
    }
    onStatus = event=>{
        this.setState({status:event.target.value})
    }
    onDescription = event=>{
        this.setState({description:event.target.value})
    }
    
    //Submit the given todoList which contains todo,priority,description,status
    onSubmit = async(event)=>{
        event.preventDefault()
        const {todo,priority,description,status} = this.state
        const todoData = {
            todo,
            priority,
            description,
            status
        }
        const todoApiUrl = 'https://backendtodoblog2-4.onrender.com/todos'
        const jwtToken = Cookies.get('jwt_token')
        const config = {
            headers : {Authorization: `Bearer ${jwtToken}` }
        }
        await axios.post(todoApiUrl,todoData,config)
        window.history.pushState({}, undefined, "/");
        window.location.reload()
    }
    render(){
        const {todo,priority,status,description} = this.state
        return(
            <Background>
                <TodoForm onSubmit={this.onSubmit}>
                    <Heading>Add Todo</Heading>
                    <TodoLabel htmlFor="todo">Enter Your Todo</TodoLabel>
                    <TodoInput id="todo" onChange={this.onTodo} value={todo} placeholder="Enter Todo"/>
                    <TodoLabel htmlFor="description">Enter Your Description</TodoLabel>
                    <TodoText id="description"  value={description} onChange={this.onDescription} placeholder="Enter Description"/>
                    <TodoLabel htmlFor="priority" onChange={this.onPriority}>Enter Your Priority</TodoLabel>
                    <SelectPriority onChange={this.onPriority} value={priority} id="priority">
                        <OptionPriority value="LOW">LOW</OptionPriority>
                        <OptionPriority value="MEDIUM">MEDIUM</OptionPriority>
                        <OptionPriority value="HIGH">HIGH</OptionPriority>
                    </SelectPriority>
                    <TodoLabel htmlFor="status">Status</TodoLabel>
                    <SelectPriority onChange={this.onStatus} value={status} id="status">
                        <OptionPriority value="Accomplished">Accomplished</OptionPriority>
                        <OptionPriority value="Unaccomplished">Unaccomplished</OptionPriority>
                    </SelectPriority>
                    <AddTodo type="submit">
                        Add Todo
                    </AddTodo>
                </TodoForm>
            </Background>
        )
    }
}

export default AddTask