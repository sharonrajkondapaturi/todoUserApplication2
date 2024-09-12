import { Component } from "react";
import axios from 'axios'
import Cookies from 'js-cookie'
import { Background, TodoForm,TodoText,TodoInput, TodoLabel, AddTodo, SelectPriority, OptionPriority,Heading,Star,Condit} from "./styledComponents";

// to add New TodoList using Class Component
class AddTask extends Component{
    state={todo:'',priority:'LOW',description:'',status:'Unaccomplished',todolength:false,descriptionlength:false}

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
        if(todo !=='' || description !=='' || todo[0] !== " " || description[0] !== " "){
            if(todo.length >= 5 && description.length >= 20){
                this.setState({descriptionlength:false,todolength:false})
                await axios.post(todoApiUrl,todoData,config)
                window.history.pushState({}, undefined, "/");
                window.location.reload()
            }
            else{
                if(description.length < 20 && todo.length < 5){
                    this.setState({descriptionlength:true,todolength:true})
                }
                else if(todo.length < 5){
                    this.setState({descriptionlength:false,todolength:true})
                }
                else if(description.length < 20){
                    this.setState({descriptionlength:true,todolength:false})
                }
            }
        }
    }
    render(){
        const {todo,priority,status,description,descriptionlength,todolength} = this.state
        return(
            <Background>
                <TodoForm onSubmit={this.onSubmit}>
                    <Heading>Add Todo</Heading>
                    <TodoLabel htmlFor="todo">Enter Your Todo <Star>*</Star></TodoLabel>
                    <TodoInput id="todo" onChange={this.onTodo} value={todo} placeholder="Enter Todo"/>
                    {todolength?<Condit>* Todo should contain 5 letters or above</Condit>:null}
                    <TodoLabel htmlFor="description">Enter Your Description <Star>*</Star></TodoLabel>
                    <TodoText id="description"  value={description} onChange={this.onDescription} placeholder="Enter Description"/>
                    {descriptionlength?<Condit>* Description should contain 20 letters or above</Condit>:null}
                    <TodoLabel htmlFor="priority" onChange={this.onPriority}>Enter Your Priority <Star>*</Star></TodoLabel>
                    <SelectPriority onChange={this.onPriority} value={priority} id="priority">
                        <OptionPriority value="LOW">LOW</OptionPriority>
                        <OptionPriority value="MEDIUM">MEDIUM</OptionPriority>
                        <OptionPriority value="HIGH">HIGH</OptionPriority>
                    </SelectPriority>
                    <TodoLabel htmlFor="status">Status <Star>*</Star></TodoLabel>
                    <SelectPriority onChange={this.onStatus} value={status} id="status">
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