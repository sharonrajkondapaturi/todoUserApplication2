import {useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { TodoLabel,TodoText,TodoForm,TodoInput,Background,SelectPriority,OptionPriority, UpdateTodo, Heading, Star, Condit} from './styledComponents'

//to Edit Task using hooks 
const UpdateTask = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const [id,setId] = useState('')
    const [todo,updateTodo] = useState('')
    const [description,updateDescription] = useState('')
    const [priority,updatePriority] = useState('LOW')
    const [status,updateStatus] = useState("Unaccomplished")
    const [todolength,updateTodoLength] = useState(false)
    const [descriplength,updatedescriplength] = useState(false)
    
    //to update after the changes made by the user
    const onSubmit = async(event)=>{
        event.preventDefault()
        const todoData = {
            id,
            todo,
            description,
            priority,
            status
        }
        //authorization
        const jwtToken = Cookies.get('jwt_token')
        const config = {
            headers : {Authorization: `Bearer ${jwtToken}` }
        }
        //check whether the details were not empty and if not it will be fetched
        if(todo !=='' || description !=='' || todo[0] !== " " || description[0] !== " "){
            if(todo.length >= 5 && description.length >= 20){
                updateTodoLength(false)
                updatedescriplength(false)
                await axios.put(`https://backendtodoblog2-4.onrender.com/todos/${id}`,todoData,config)
                updateTodoLength(false)
                updatedescriplength(false)
                navigate('/')
            }
            else{
                if(description.length < 20 && todo.length < 5){
                    updateTodoLength(true)
                    updatedescriplength(true)
                }
                else if(todo.length < 5){
                    updateTodoLength(true)
                    updatedescriplength(false)
                }
                else if(description.length < 20){
                    updateTodoLength(false)
                    updatedescriplength(true)
                }
            }
        }

    }
    
    //edit options
    const onTodo = event=>{
        updateTodo(event.target.value.toUpperCase())
    }
    const onPriority = event=>{
        updatePriority(event.target.value.toUpperCase())
    }
    const onStatus = event=>{
        updateStatus(event.target.value)
    }
    const onDescription = event=>{
        updateDescription(event.target.value)
    }
    
    //the fillData will be displayed so that the user can easily add and remove the words
    useEffect(()=>{
        setId(location.state.id)
        updateTodo(location.state.todo)
        updatePriority(location.state.priority)
        updateStatus(location.state.status)
        updateDescription(location.state.description)
    },[location.state.id,location.state.todo,location.state.priority,location.state.status,location.state.description
    ])

    return(
        <Background>
            <TodoForm onSubmit={onSubmit}>
            <Heading>Update Todo</Heading>
                <TodoLabel htmlFor="TodoName">Enter Your Todo <Star>*</Star></TodoLabel>
                <TodoInput id="TodoName" onChange={onTodo} value={todo}/>
                {todolength?<Condit>* Todo should contain 5 letters or above</Condit>:null}
                <TodoLabel htmlFor="description">Enter Your Description <Star>*</Star></TodoLabel>
                <TodoText id="description"  value={description} onChange={onDescription} placeholder="Enter Description"/>
                {descriplength?<Condit>* Todo should contain 5 letters or above</Condit>:null}
                <TodoLabel htmlFor="Priority">Enter Your Priority <Star>*</Star></TodoLabel>
                <SelectPriority onChange={onPriority} value={priority} id="Priority">
                        <OptionPriority value="LOW">LOW</OptionPriority>
                        <OptionPriority value="MEDIUM">MEDIUM</OptionPriority>
                        <OptionPriority value="HIGH">HIGH</OptionPriority>
                </SelectPriority>
                <TodoLabel htmlFor="status">Status <Star>*</Star></TodoLabel>
                <SelectPriority onChange={onStatus} value={status} id="status">
                        <OptionPriority value="Unaccomplished">Unaccomplished</OptionPriority>
                        <OptionPriority value="Accomplished">Accomplished</OptionPriority>
                </SelectPriority>
                <UpdateTodo type="submit">
                    Update Todo
                </UpdateTodo>
            </TodoForm>
        </Background>
    )
}

export default UpdateTask