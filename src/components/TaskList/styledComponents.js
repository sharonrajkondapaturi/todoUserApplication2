import style,{keyframes} from 'styled-components'

const slideUp = keyframes`
from{
    margin-top:-100px;
}
to{
    margin-top:0px;
}
`

export const TodoList = style.li`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:column;
    padding:20px;
    width:600px;
    min-height:500px;
    max-height:500px;
    overflow-y:scroll;
    background-color:#f5f5f0;
    margin-right:30px;
    margin-bottom:40px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation-name:${slideUp};
    animation-duration:3s;
}
@media screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    padding:20px;
    width:250px;
    background-color:#f5f5f0;
    margin-right:30px;
    margin-bottom:40px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-height:550px;
    overflow-y:scroll;
    animation-name:${slideUp};
    animation-duration:3s;
}
@media screen and (max-width:575px){
    display:flex;
    flex-direction:column;
    padding:20px;
    width:250px;
    background-color:#f5f5f0;
    margin-right:30px;
    margin-bottom:40px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-height:500px;
    overflow-y:scroll;
    animation-name:${slideUp};
    animation-duration:3s;
}
@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    padding:20px;
    width:250px;
    background-color:#f5f5f0;
    margin-right:30px;
    margin-bottom:40px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-height:400px;
    overflow-y:scroll;
    animation-name:${slideUp};
    animation-duration:3s;
}
`
export const HeadContainer = style.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
export const ButtonRows = style.div`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
}
@media screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`
export const Description = style.p`
@media screen and (min-width:767px){
    color:#000000;
    font-family:Roboto;
    font-weight:bold;
    font-size:24px;
    margin-left:10px;
}
@media screen and (max-width:767px){
    color:#000000;
    font-family:Roboto;
    font-weight:bold;
    font-size:20px;
    margin-left:10px;
}
@media screen and (max-width:575px){
    color:#000000;
    font-family:Roboto;
    font-weight:bold;
    font-size:14px;
    margin-left:10px;
}
`
export const DescriptionSpan = style.span`
@media screen and (min-width:767px){
    color:#000000;
    font-family:Roboto;
    font-weight:500;
    font-size:24px;
    margin-left:10px;
    text-decoration:${props=>props.text === "Unaccomplished"? "none":"line-through"};
}
@media screen and (max-width:767px){
    color:#000000;
    font-family:Roboto;
    font-weight:500;
    font-size:20px;
    margin-left:10px;
    text-decoration:${props=>props.text === "Unaccomplished"? "none":"line-through"};
}
@media screen and (max-width:575px){
    color:#000000;
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    margin-left:10px;
    text-decoration:${props=>props.text === "Unaccomplished"? "none":"line-through"};
}
`
export const Todo = style.h1`
@media screen and (min-width:768px){
    font-family:cursive;
    margin-right:20px;
    text-align:center;
    text-decoration:${props=>props.text === "Unaccomplished"? "none":"line-through"};
}
@media screen and (max-width:767px){
    font-family:cursive;
    margin-right:20px;
    text-align:center;
    font-size:18px;
    text-decoration:${props=>props.text === "Unaccomplished"? "none":"line-through"};
}
`

export const Button = style.button`
@media screen and (min-width:768px){
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.color};
    padding:10px;
    border:none;
    border-radius:10px;
    margin-right:10px;
    color:#ffffff;
    font-size:16px;
    width:200px;
    cursor:pointer;
    font-weight:bold;
    transition:1s;
    &:hover{
        transform:translateY(10px);
    }
}

@media screen and (max-width:767px){
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.color};
    padding:10px;
    border:none;
    border-radius:10px;
    margin-bottom:20px;
    color:#ffffff;
    font-size:14px;
    width:150px;
    cursor:pointer;
    font-weight:bold;
}
@media screen and (max-width:575px){
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.color};
    padding:8px;
    border:none;
    border-radius:10px;
    margin-bottom:20px;
    color:#ffffff;
    font-size:12px;
    width:150px;
    cursor:pointer;
    font-weight:bold;
}
`
export const Priority = style.p`
@media screen and (min-width:576px){
color:${props=>props.color};
font-weight:500;
font-size:30px;
margin-left:10px;
}
color:${props=>props.color};
font-weight:500;
font-size:30px;
margin-left:10px;
@media screen and (max-width:575px){
    color:${props=>props.color};
    font-weight:500;
    font-size:16px;
    margin-left:10px;  
}
`

export const PrioritySpan = style.span`
@media screen and (min-width:576px){
color:${props=>props.color};
font-weight:500;
font-size:30px;
margin-left:10px;
text-decoration:${props=>props.text === "Unaccomplished"? "none":"line-through"};
}
color:${props=>props.color};
font-weight:500;
font-size:30px;
margin-left:10px;
@media screen and (max-width:575px){
    color:${props=>props.color};
    font-weight:500;
    font-size:16px;
    margin-left:10px;  
}
`