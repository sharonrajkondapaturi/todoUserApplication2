import style,{keyframes} from 'styled-components'

const slideUp = keyframes`
from{
    margin-top:-150px;
}
to{
    margin-top:0px;
}
`

export const UserContainer = style.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-image:linear-gradient(to top,#FF512F,#DD2476);
`
export const Box = style.div`
@media screen and (min-width:768px){
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    width:500px;
    text-align:center;
    padding:10px;
    border-radius:10px;
    font-weight:bold;
    animation-name:${slideUp};
    animation-duration:3s;
}
@media screen and (max-width:767px){
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    width:400px;
    text-align:center;
    padding:10px;
    border-radius:10px;
    font-weight:bold;
}
@media screen and (max-width:575px){
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    width:300px;
    text-align:center;
    padding:10px;
    border-radius:10px;
    font-weight:bold;
}
@media screen and (max-width:375px){
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    width:250px;
    text-align:center;
    padding:10px;
    border-radius:10px;
    font-weight:bold;
}
`

export const UserImage = style.img`
    width:100px;
    height:100px;
    margin-top:10px;
    margin-bottom:15px;
`
export const UserCon = style.div`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:18px;
    transition:1s;
    cursor:pointer;
    &:hover{
        margin-left:12px;
    }
}
@media screen and (max-width:767px){
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:16px;
}
@media screen and (max-width:575px){
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:14px;
}
`

export const UserDescrip = style.p`
    font-family:Roboto;
`
export const Button = style.button`
background-color:#5185f5;
border:none;
border-radius:8px;
color:#fff;
padding:8px;
margin-bottom:20px;
margin-left:10px;
font-weight:bold;
cursor:pointer;
transition:1s;
font-size:15px;
&:hover{
    background-color:#9b3de3;
    transform:translateY(10px)
}
`