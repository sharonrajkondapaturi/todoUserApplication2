import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {FidgetSpinner} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Heading,Container,MiniContainer,Form,Input,Label,LoginButton,Linkto,Error} from './styledComponents'

//this function is used when the user is new to the todo app where he create is ID
const Register = ()=>{
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirm] = useState('')
    const [loading,setloading] = useState(false)
    const [errorMessage,setError] = useState('')
    const navigate = useNavigate()
    
    //if the data is successfully fetched the user will be routed todos page
    const onSuccess = jwtToken =>{
        Cookies.set('jwt_token',jwtToken,{expires:30})
        navigate('/login')

    }

    //check's the user credentials
    const onCredentials = async(event) =>{
        event.preventDefault()
        const userDetails = {
            username,password
        }
        setError('')
        setloading(prevState => !prevState)
        //if the password and confirm password is same it will fetch the data
        if(password === confirmPassword){
            //try method will fetch the data if the username is not present in user Database
            try{
                const loginUrl = "https://backendtodoblog2-4.onrender.com/register"
                const response = await axios.post(loginUrl,userDetails)
                setError('')
                onSuccess(response.data.jwtToken)
            }
            //catch occurs when the username is already present in the dataBase and errorMessage occurs
            catch{
                setloading(prevState => !prevState)
                setError("User already exists")
            }
        }
        //if the password is not Match errorMessage occurs
        else{
            setloading(prevState => !prevState)
            setError("password is not matched")
        }
        
        
    }
    
    //credentials of user,password,confirmPassword where user enters in input area
    const onUser = event =>{
        setUserName(event.target.value)
    }

    const onPassword = event =>{
        setPassword(event.target.value)
    }

    const onConfirm = event =>{
        setConfirm(event.target.value)
    }

return(
    <Container>
        <Form onSubmit={onCredentials}>
            <Heading>Register</Heading>
            <MiniContainer>
            <Label htmlFor="user">Username</Label>
            <Input id="user" value={username} onChange={onUser} placeholder='Username'/>
            </MiniContainer>
            <MiniContainer>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" value={password} onChange={onPassword} placeholder='Password'/>
            </MiniContainer>
            <MiniContainer>
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input type="password" id="confirm-password" value={confirmPassword} onChange={onConfirm} placeholder='Confirm password'/>
            </MiniContainer>
            <Error>{errorMessage}</Error>
            {loading===true?(<FidgetSpinner visible={true} height="40" width="40" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper"/>):
            null
            }
            <LoginButton type="submit">
                Login
            </LoginButton>
            <Link to="/login" color="#ffffff">
            <Linkto>already a user?</Linkto>
            </Link>
        </Form>
    </Container>
)
}

export default Register