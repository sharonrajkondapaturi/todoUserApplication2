import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {FidgetSpinner} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Heading,Container,MiniContainer,Form,Input,Label,Error,LoginButton,Linkto} from './styledComponents'

// Login Function where the user logs 
const Login = ()=>{
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage,setError] = useState('')
    const [loading,setloading] = useState(false)
    const navigate = useNavigate()
    
    //if the data is successfully fetched the user will be routed todos page
    const onSuccess = jwtToken =>{
        Cookies.set('jwt_token',jwtToken,{expires:30})
        navigate('/todos')
    }

    //check's the user credentials
    const onCredentials = async(event) =>{
        event.preventDefault()
        const userDetails = {
            username,password
        }
        setError('')
        setloading(prevState => !prevState)
        //if the credential were right it will go to try state or else catch
        try{
            const loginUrl = "https://backendtodoblog2-4.onrender.com/login"
            const response = await axios.post(loginUrl,userDetails)
            onSuccess(response.data.jwtToken)
        }
        catch{
            setloading(prevState => !prevState)
            setError("Invalid username or password")
        }
        
    }
    
    //user and password where the user enter in input area
    const onUser = event =>{
        setUserName(event.target.value)
    }

    const onPassword = event =>{
        setPassword(event.target.value)
    }

return(
    <Container>
        <Form onSubmit={onCredentials}>
        {loading===true?(
            <div>
            <FidgetSpinner visible={true} height="80" width="80" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper"/>
            </div>)
            :
            null
            }
            <Heading>Login</Heading>
            <MiniContainer>
            <Label htmlFor="user">Username</Label>
            <Input id="user" value={username} onChange={onUser} placeholder='Username'/>
            </MiniContainer>
            <MiniContainer>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" value={password} onChange={onPassword} placeholder='Password'/>
            </MiniContainer>
            <Error>{errorMessage}</Error>
            <LoginButton type="submit">
                Login
            </LoginButton>
            <Link to="/register" color="#ffffff">
            <Linkto>are you a new user?</Linkto>
            </Link>
        </Form>
    </Container>
)
}

export default Login