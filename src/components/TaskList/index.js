import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'
import { CiEdit } from "react-icons/ci";
import { BiTask,BiTaskX } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Todo,TodoList,HeadContainer,Button,ButtonRows,Priority,PrioritySpan,Description,DescriptionSpan} from "./styledComponents";

//Tasklist is been display displayed 
const TaskList = props =>{
    const {todoList} = props
    const {id,todo,priority,status,description} = todoList
    const todoData = {
        id,
        todo,
        priority,
        description,
        status
    }

    //each priority has its own color
    const onColor = (colors) =>{
        switch(colors){
            case "LOW":
                return '#e80c3b'
            case 'MEDIUM':
                return '#cccc29'
            case "HIGH":
                return "#0c9c1d"
            default:
                return '#3271a8'
        }
    }

    // to delete the task
    const onDelete = async() =>{
       const todoApiUrl = `https://backendtodoblog2-4.onrender.com/todos/${todoData.id}`
       const jwtToken = Cookies.get('jwt_token')
       const config = {
        headers : {Authorization: `Bearer ${jwtToken}` }
       }
       await axios.delete(todoApiUrl,config)
       window.location.reload()
    }

    //to accomplish the set Task
    const onAccomplish = async()=>{
        if(status === "Accomplished"){
        const todoApiUrl = `https://backendtodoblog2-4.onrender.com/status/${todoData.id}`
        const jwtToken = Cookies.get('jwt_token')
        const config = {
            headers : {Authorization: `Bearer ${jwtToken}` }
        }
        await axios.put(todoApiUrl,{status:"Unaccomplished"},config)
        window.location.reload()
      }
        else{
        const todoApiUrl = `https://backendtodoblog2-4.onrender.com/status/${todoData.id}`
        const jwtToken = Cookies.get('jwt_token')
        const config = {
        headers : {Authorization: `Bearer ${jwtToken}` }
       }
        await axios.put(todoApiUrl,{status:"Accomplished"},config)
        window.location.reload()
        }
    }

    return(
        <TodoList>
        <Todo text={status}>{todo}</Todo>
        <Description>Description: <DescriptionSpan text={status}>
        {description}    
        </DescriptionSpan></Description>
        <HeadContainer>
        <Priority color="#000000">Priority: </Priority>
        <PrioritySpan color={onColor(priority)} text={status}>{priority}</PrioritySpan>
        </HeadContainer>
        <ButtonRows>
        <Link to="/updatetodos" state={todoData} style={{textDecoration:"none"}}>
        <Button type="button" color="#0c9c1d">
            <CiEdit fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Edit Todo
        </Button>
        </Link>
        <Button type="button" color="#e80c3b" onClick={onDelete}>
            <RiDeleteBin5Line fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Delete Todo
        </Button>
        {status === "Unaccomplished"?(
            <Button type="button" color="#4287f5" onClick={onAccomplish}>
            <BiTask size={20} fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
            Accomplished
        </Button>
        ):(<Button type="button" color="#de632a" onClick={onAccomplish}>
        <BiTaskX size={20} fill="#ffffff" style={{marginRight:10,paddingRight:10,borderRight:"1px solid #ffffff"}}/>
        Unaccomplished
        </Button>)}
        </ButtonRows>
        </TodoList>
    )
}

export default TaskList