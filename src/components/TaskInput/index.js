import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import {FidgetSpinner} from 'react-loader-spinner'
import { CiLogout } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import TaskList from "../TaskList"
import { BackgroundContainer,Heading,TopContainer,TodoInput,AddButton,MainContainer,Tab,Tabs,LoadContainer,FailureImage,Notag} from './styledComponents';

// apiStatus is for loading,suucessfull page and Failure Page

const apiStatus = {
    initial:"INITIAL",
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE"
}
const TaskInput = () =>{
    /*the below useState is used for setting up the Api to render the accurate todo so That the user 
    can feel free to search his TodoList using hooks */

    const [currentApiStatus,setApiStatus] = useState(apiStatus.initial)
    const [priority,setPriority] = useState('')
    const [todo,setTodo] = useState('')
    const [todoList,setTodoList] = useState([])
    const navigate = useNavigate()
    
    //fetching the data
    const onRender = async(priority,todo)=>{
        setApiStatus(apiStatus.loading)
        const todoApiUrl = `https://backendtodoblog2-4.onrender.com/todos/?priority=${priority}&search=${todo}`
        const jwtToken = Cookies.get('jwt_token')
        //authorization 
        const config = {
            headers : {Authorization: `Bearer ${jwtToken}` }
        }
        //renders the data if successfully fetched
        try{
            const response = await axios.get(todoApiUrl,config)
            const todoData = response.data
            setApiStatus(apiStatus.success)
            setTodoList(todoData)
        }
        //failure image occurs
        catch{
            setApiStatus(apiStatus.failure)
        }
    }
    
    //search Bar
    const onTodo = event=>{
        setTodo(event.target.value.toUpperCase())
    }
    
    //the loading is displayed until the data has been fetched
    const onRenderLoading = ()=>(
        <LoadContainer>
            <FidgetSpinner visible={true} height="80" width="80" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper"/>
        </LoadContainer>
        
    )

    //the todo objects will be render successfull and todolist will be fetched from the Created Api
    const onRenderSuccess = ()=>(
        <div>
             {todoList.length === 0?<Notag>No Current TodoList Either create or toggle the Priority</Notag>:
            <MainContainer>{todoList.map(eachTodo=>
                <TaskList key={eachTodo.id} todoList={eachTodo}/>
            )}</MainContainer>
            }
        </div>
           
            
        
    )
   
    //when api fails the fail image will be displayed
  const onRenderFailure = ()=>(
    <div>
        <FailureImage src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7KCpGW9_D2rIlNV2JhFspQ.png" alt="failure"/>
    </div>
  )


    
    //the status of the Api which states the current situation

    const onRenderStatus = ()=>{
        switch(currentApiStatus){
            case apiStatus.loading:
                return onRenderLoading()
            case apiStatus.success:
                return onRenderSuccess()
            default:
                return onRenderFailure()
        }
    }
     
    //setting up the priority
    const onPriority = event=>{
        setPriority(event.target.value)
    }

    
    //To add a newTodo 
    const onAddTodo = ()=>{
        navigate('/addtodos')
    }

    //user will be logout
    const onLoginButton = ()=>{
        Cookies.remove('jwt_token')
        window.history.pushState({}, undefined, "/login");
        window.location.reload()
    }
    
    //each priority for their own colors
    const onColor = (colors) =>{
        switch(colors){
            case "LOW":
                return '#e80c3b'
            case 'MEDIUM':
                return '#fffc69'
            case "HIGH":
                return "#0c9c1d"
            default:
                return '#3271a8'
        }
    }
   
    // to render from the initial without calling
    useEffect(()=>{
        onRender(priority,todo)
    },[priority,todo])

    return(
        <BackgroundContainer>
            <Heading>Todo List</Heading>
            <TopContainer>
                <TodoInput placeholder="Enter Todo" onChange={onTodo} value={todo}/>
                <AddButton onClick={onAddTodo}>
                    <IoAddSharp style={{fontSize:20,borderRight:"1px solid #ffffff",marginRight:10,paddingRight:10}}/>
                    AddTodo
                </AddButton>
                <AddButton onClick={onLoginButton}>
                    <CiLogout style={{fontSize:20,borderRight:"1px solid #ffffff",marginRight:10,paddingRight:10}}/>
                    Logout
                </AddButton>
            </TopContainer>
            <Tabs>
                <Tab onClick={onPriority} value="" color={priority === '' ? onColor(''):"#ffffff"}>ALL</Tab>
                <Tab onClick={onPriority} value="LOW" color={priority === 'LOW' ? onColor('LOW'):"#ffffff"}>LOW</Tab>
                <Tab onClick={onPriority} value="MEDIUM" color={priority === 'MEDIUM' ? onColor('MEDIUM'):"#ffffff"}>MEDIUM</Tab>
                <Tab onClick={onPriority} value="HIGH"  color={priority === 'HIGH' ? onColor('HIGH'):"#ffffff"}>HIGH</Tab>
            </Tabs>
            {onRenderStatus()}
        </BackgroundContainer>
    )
}

export default TaskInput