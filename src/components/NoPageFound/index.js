import { useNavigate } from "react-router-dom"
import { NoContainer,NoImage,Heading,Button } from "./styledComponents"

//if the user logs with an incorrect page then the NoPageFound Page will be Routed
const NoPageFound = ()=>{
    const navigate = useNavigate()

    const onButton = ()=>{
        navigate('/todos')
    }
    return(
        <NoContainer>
        <NoImage src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" 
        alt="no-page"/>
        <Heading>
            OOP's! 404 No page Found click Home Page Button To Navigate Home 
        </Heading>
        <Button type="button" onClick={onButton}>
            Home Page
        </Button>
       </NoContainer>
    )
    
}

export default NoPageFound