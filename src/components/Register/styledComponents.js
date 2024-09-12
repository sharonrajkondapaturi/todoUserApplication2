import style from  "styled-components"

export const Container = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:url("https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg");
min-height:100vh;
background-size:cover;
width:100%;
`
export const MiniContainer = style.div`
margin-bottom:10px;
display:flex;
flex-direction:column;
`

export const Star = style.span`
color:red;
`

export const Heading = style.h1`
@media screen and (min-width:768px){
    font-family:cursive;
    color:#000000;
    text-align:center;
}
@media screen and (max-width:767px){
    font-family:cursive;
    color:#000000;
    text-align:center;
    font-size:30px;
}
`
export const Form = style.form`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:600px;
    border-radius:10px;
}
@media screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:450px;
    border-radius:10px;
}
@media screen and (max-width:575px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:375px;
    border-radius:10px;
}
@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:300px;
    border-radius:10px;
}
`
export const Label = style.label`
font-family:Roboto;
color:#000000;
font-size:18px;
margin-bottom:5px;
`
export const Input = style.input`
@media screen and (min-width:768px){
    border:none;
    padding:10px;
    width:450px;
    border-radius:10px;
}
@media screen and (max-width:767px){
    border:none;
    padding:8px;
    width:400px;
    border-radius:9px;
}
@media screen and (max-width:575px){
    border:none;
    padding:8px;
    width:300px;
    border-radius:8px;
}
@media screen and (max-width:375px){
    border:none;
    padding:8px;
    width:200px;
    border-radius:7px;
}
`
export const LoginButton = style.button`
@media screen and (min-width:768px){
    border:none;
    background-color:#3492eb;
    color:#ffffff;
    font-family:Roboto;
    width:100px;
    padding:8px;
    cursor:pointer;
    font-weight:bold;
    font-size:18px;
    border-radius:10px;
}
@media screen and (max-width:767px){
    border:none;
    background-color:#3492eb;
    color:#ffffff;
    font-family:Roboto;
    width:90px;
    padding:8px;
    cursor:pointer;
    font-weight:bold;
    font-size:15px;
    border-radius:10px;
}
@media screen and (max-width:375px){
    border:none;
    background-color:#3492eb;
    color:#ffffff;
    font-family:Roboto;
    width:80px;
    padding:8px;
    cursor:pointer;
    font-weight:bold;
    font-size:13px;
    border-radius:10px;
}
`
export const Error = style.p`
color:#fc030b;
font-family:Roboto;
font-size:18px;
margin:6px;
font-weight:bold;
`
export const Linkto = style.p`
color:#ffffff;
font-family:Roboto;
font-size:18px;
margin:6px;
font-weight:bold;
`
export const Condit = style.p`
color:#f5073a;
font-weight:bold;
font-size:16px;
margin-top:1px;
`