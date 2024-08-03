import style from 'styled-components'

export const NoContainer = style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
`
export const NoImage = style.img`
@media screen and (min-width:768px){
    width:700px;
    height:650px;
    margin-bottom:25px;
}
@media screen and (max-width:767px){
    width:500px;
    height:450px;
    margin-bottom:25px;
}
@media screen and (max-width:575px){
    width:300px;
    height:250px;
    margin-bottom:25px;
}
@media screen and (max-width:375px){
    width:200px;
    height:150px;
    margin-bottom:20px;
}
`

export const Heading = style.h1`
@media screen and (min-width:768px){
    font-family:Roboto;
    color:#000000;
    text-align:center;
}
@media screen and (max-width:767px){
    font-family:Roboto;
    color:#000000;
    font-size:35px;
    text-align:center;
}
@media screen and (max-width:575px){
    font-family:Roboto;
    color:#000000;
    font-size:20px;
    text-align:center;
}
@media screen and (max-width:375px){
    font-family:Roboto;
    color:#000000;
    font-size:10px;
    text-align:center;
}
`
export const Button = style.button`
@media screen and (min-width:768px){
    border:none;
    border-radius:10px;
    background-color:#4287f5;
    color:#ffffff;
    font-size:18px;
    padding:9px;
    width:150px;
    margin-top:25px;
}
@media screen and (max-width:767px){
    border:none;
    border-radius:8px;
    background-color:#4287f5;
    color:#ffffff;
    font-size:15px;
    padding:7px;
    width:130px;
    margin-top:25px;
}
@media screen and (max-width:575px){
    border:none;
    border-radius:7px;
    background-color:#4287f5;
    color:#ffffff;
    font-size:12px;
    padding:7px;
    width:100px;
    margin-top:25px;
}
@media screen and (max-width:375px){
    border:none;
    border-radius:7px;
    background-color:#4287f5;
    color:#ffffff;
    font-size:10px;
    padding:6px;
    width:90px;
    margin-top:20px;
}
`