import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {FidgetSpinner} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Heading,Container,MiniContainer,Form,Input,Label,LoginButton,Linkto,Error,Star,Condit} from './styledComponents'

//this function is used when the user is new to the todo app where he create is ID
const Register = ()=>{
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirm] = useState('')
    const [loading,setloading] = useState(false)
    const [errorMessage,setError] = useState('')
    const [passwordError,setPassError] = useState(false)
    const [confirmError,setConfirmError] = useState(false)
    const [userError,setuserError] = useState(false)
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
        if(username.length < 4 && password.length < 8 && confirmPassword.length < 8){
            setloading(prevState => !prevState)
            setuserError(true)
            setPassError(true)
            setConfirmError(true)
            setError('')
        }
        else if(username.length < 4 && password.length < 8 && confirmPassword.length >= 8){
            setloading(prevState => !prevState)
            setuserError(true)
            setPassError(true)
            setConfirmError(false)
            setError('')
        }
        else if(username.length < 4 && confirmPassword.length < 8 && password.length >= 8){
            setloading(prevState => !prevState)
            setuserError(true)
            setPassError(false)
            setConfirmError(true)
            setError('')
        }
        else if(username.length < 4){
            setloading(prevState => !prevState)
            setuserError(true)
            setPassError(false)
            setConfirmError(false)
            setError('')
        }
        else if(password === '' && confirmPassword === ''){
            setloading(prevState => !prevState)
            setuserError(false)
            setPassError(true)
            setConfirmError(true)
            setError('')
        }
        else if(confirmPassword.length < 8 && password.length < 8){
            setloading(prevState => !prevState)
            setuserError(false)
            setPassError(true)
            setConfirmError(true)
            setError('')
        }
        else if(password.length < 8 && confirmPassword.length >= 8){
            setloading(prevState => !prevState)
            setuserError(false)
            setPassError(true)
            setConfirmError(false)
            setError('')
        }
        else if(confirmPassword.length < 8 && password.length >= 8){
            setloading(prevState => !prevState)
            setuserError(false)
            setPassError(false)
            setConfirmError(true)
            setError('')
        }
        //if the password and confirm password is same it will fetch the data
        else if(password.length >= 8 && confirmPassword.length >= 8){
            if(password === confirmPassword){
                //try method will fetch the data if the username is not present in user Database
                try{
                    const loginUrl = "https://backendtodoblog2-4.onrender.com/register"
                    const response = await axios.post(loginUrl,userDetails)
                    setError('')
                    setuserError(false)
                    setConfirmError(false)
                    setPassError(false)
                    onSuccess(response.data.jwtToken)
                }
                //catch occurs when the username is already present in the dataBase and errorMessage occurs
                catch{
                    setloading(prevState => !prevState)
                    setError("User already exists")
                    setuserError('')
                    setPassError('')
                    setConfirmError('')
                }
            }
            //if the password is not Match errorMessage occurs
            else{
                setloading(prevState => !prevState)
                setPassError(false)
                setuserError(false)
                setConfirmError(false)
                setError("password is not matched")
            }  
        } 
    else{
        setloading(prevState => !prevState)
        setuserError(false)
        setPassError(true)
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
            <Label htmlFor="user">Username <Star>*</Star></Label>
            <Input id="user" value={username} onChange={onUser} placeholder='Username'/>
            {userError?<Condit>* username length should be minium 4</Condit>:null}
            </MiniContainer>
            <MiniContainer>
            <Label htmlFor="password">Password <Star>*</Star></Label>
            <Input type="password" id="password" value={password} onChange={onPassword} placeholder='Password'/>
            {passwordError?<Condit>* password length should be minimum 8</Condit>:null}
            </MiniContainer>
            <MiniContainer>
            <Label htmlFor="confirm-password">Confirm password <Star>*</Star></Label>
            <Input type="password" id="confirm-password" value={confirmPassword} onChange={onConfirm} placeholder='Confirm password'/>
            {confirmError?<Condit>* password length should be minimum 8</Condit>:null}
            </MiniContainer>
            <Error>{errorMessage}</Error>
            {loading===true?(<FidgetSpinner style={{marginTop:10,marginBottom:10}}visible={true} height="40" width="40" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper"/>):
            null
            }
            <LoginButton type="submit">
                Register
            </LoginButton>
            <Link to="/login" color="#ffffff">
            <Linkto>already a user?</Linkto>
            </Link>
        </Form>
    </Container>
)
}

export default Register