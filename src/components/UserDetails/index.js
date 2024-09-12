import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'
import axios from 'axios'
import Cookies from 'js-cookie'
import {UserContainer,UserImage,Box,UserCon,UserDescrip,Button} from './styledComponents'

const apiStatus = {
    initial:"INITIAL",
    loading:"LOADING",
}
//user Details Of a Todo List
const UserDetails = ()=>{
    const username = localStorage.getItem("userTodo")
    const [userTodo,setUserTodo] = useState(apiStatus.loading)
    const [accomplishedCount,setAccomCount] = useState(apiStatus.loading)
    const [unAccomplishedCount,setUnAccomCount] = useState(apiStatus.loading)
    const [todoCount,setTodoCount] = useState(apiStatus.loading)
    const jwtToken = Cookies.get('jwt_token')
    const navigate = useNavigate()

    //authorization 
    const config = {
        headers : {Authorization: `Bearer ${jwtToken}` }
    }
    //render user details
    const onUserRender = async()=>{
        const userDetailsApi = `https://backendtodoblog2-4.onrender.com/todos/userTodos`
        const userCount = await axios.get(userDetailsApi,config)
        if(userCount.status === 200){
            setUserTodo(username)
            setAccomCount(userCount.data[0].accomplished_count)
            setUnAccomCount(userCount.data[0].unaccomplished_count)
            setTodoCount(userCount.data[0].todo_count)
        }
    }

    //use to logout
    const onLogout = ()=>{
        Cookies.remove('jwt_token')
        localStorage.clear()
        navigate('/login')
    }

    //navigate  to home
    const onShowTodo = ()=>{
        navigate("/")
    }

    //for loading
    const onLoading = ()=>(
        <ThreeDots height={20} width={20}/>
    )

    //add todo
    const onAddTodos = ()=>{
        navigate('/addtodos')
    }

    //use to render
    useEffect(()=>{
        onUserRender()
        // eslint-disable-next-line
    },[])

return(
    <UserContainer>
    <Box>
        <UserImage src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-img"/>
        <UserCon>USERNAME:{userTodo==="LOADING"?onLoading():<UserDescrip style={{color:"#4ca2ed"}}>&nbsp;{userTodo}</UserDescrip>}</UserCon>
        <UserCon>ACCOMPLISHED COUNT: {accomplishedCount==="LOADING"?onLoading():<UserDescrip>&nbsp;{accomplishedCount}</UserDescrip>}</UserCon>
        <UserCon>UNACCOMPLISHED COUNT: {unAccomplishedCount==="LOADING"?onLoading():<UserDescrip>&nbsp;{unAccomplishedCount}</UserDescrip>}</UserCon>
        <UserCon>TODO COUNT: {todoCount==="LOADING"?onLoading():<UserDescrip>&nbsp;{todoCount}</UserDescrip>}</UserCon>
        <Button type="button" onClick={onShowTodo}>Show Todo's</Button>
        <Button type="button" onClick={onAddTodos}>Add Todo</Button>
        <Button type="button" onClick={onLogout}>Logout</Button>
    </Box>
    </UserContainer>
)
}

export default UserDetails