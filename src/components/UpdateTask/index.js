import {useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { TodoLabel,TodoText,TodoForm,TodoInput,Background,SelectPriority,OptionPriority, UpdateTodo, Heading } from './styledComponents'

//to Edit Task using hooks 
const UpdateTask = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const [id,setId] = useState('')
    const [todo,updateTodo] = useState('')
    const [description,updateDescription] = useState('')
    const [priority,updatePriority] = useState('LOW')
    const [status,updateStatus] = useState("Unaccomplished")
    
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
        await axios.put(`https://backendtodoblog2-4.onrender.com/todos/${id}`,todoData,config)
        navigate('/todos')

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
                <TodoLabel htmlFor="TodoName">Enter Your Todo</TodoLabel>
                <TodoInput id="TodoName" onChange={onTodo} value={todo}/>
                <TodoLabel htmlFor="description">Enter Your Description</TodoLabel>
                <TodoText id="description"  value={description} onChange={onDescription} placeholder="Enter Description"/>
                <TodoLabel htmlFor="Priority">Enter Your Priority</TodoLabel>
                <SelectPriority onChange={onPriority} value={priority} id="Priority">
                        <OptionPriority value="LOW">LOW</OptionPriority>
                        <OptionPriority value="MEDIUM">MEDIUM</OptionPriority>
                        <OptionPriority value="HIGH">HIGH</OptionPriority>
                </SelectPriority>
                <TodoLabel htmlFor="status">Status</TodoLabel>
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