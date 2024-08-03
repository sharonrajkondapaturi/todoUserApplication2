import style from 'styled-components'

export const BackgroundContainer = style.div`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background-image:linear-gradient(to top,#d59edb,#f4ebf5);
    min-height:100vh;
    width:100%;
    background-size:cover;
}
@media only screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background-image:linear-gradient(to top,#d59edb,#f4ebf5);
    min-height:100vh;
    width:767px;
    background-size:cover;
}
@media only screen and (max-width:575px){
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background-image:linear-gradient(to top,#d59edb,#f4ebf5);
    min-height:100vh;
    width:575px;
    background-size:cover;
}
@media only screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background-image:linear-gradient(to top,#d59edb,#f4ebf5);
    min-height:100vh;
    min-width:376px;
    max-width:767px;
    overflow-y:scroll;
}
`
export const Heading = style.h1`
font-size:38px;
font-family:cursive;
font-weight:bold;
`
export const TopContainer = style.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:30px;
`
export const FailureImage = style.img`
height:400px;
width:400px;
`
export const TodoInput = style.input`
@media screen and (min-width:991px){
    border:none;
    height:40px;
    font-family:Roboto;
    padding-left:20px;
    font-size:22px;
    border-radius:10px;
    margin-right:10px;
    width:500px;
}
@media screen and (max-width:991px){
    border:none;
    height:40px;
    font-family:Roboto;
    padding-left:20px;
    font-size:22px;
    border-radius:10px;
    margin-right:10px;
    width:400px;
}
@media screen and (max-width:767px){
    border:none;
    height:30px;
    font-family:Roboto;
    padding-left:20px;
    font-size:16px;
    border-radius:10px;
    margin-right:10px;
    width:300px;   
}
@media screen and (max-width:575px){
    border:none;
    height:30px;
    font-family:Roboto;
    padding-left:20px;
    font-size:14px;
    border-radius:10px;
    margin-right:10px;
    width:200px;
}
@media screen and (max-width:375px){
    border:none;
    height:20px;
    font-family:Roboto;
    padding-left:20px;
    font-size:14px;
    border-radius:10px;
    margin-right:10px;
    width:300px;
}
`
export const MainContainer = style.ul`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
export const LoadContainer = style.div`
margin-top:150px;
`
export const AddButton = style.button`
@media screen and (min-width:768px){
    color:#ffffff;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    background-color:#3271a8;
    padding:10px;
    border:none;
    border-radius:10px;
    margin-right:10px;
    font-size:18px;
    width:140px;
    cursor:pointer;
    height:40px;
}
@media screen and (max-width:767px){
    color:#ffffff;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    background-color:#3271a8;
    padding:10px;
    border:none;
    border-radius:7px;
    margin-right:7px;
    font-size:16px;
    width:120px;
    height:30px;
}
@media screen and (max-width:375px){
    color:#ffffff;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    background-color:#3271a8;
    padding:10px;
    border:none;
    border-radius:7px;
    margin-right:7px;
    font-size:8px;
    width:80px;
    height:20px;
}
`
export const Tabs = style.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin-top:50px;
margin-bottom:100px;
`

export const Tab = style.button`
@media screen and (min-width:768px){
    border-left:none;
    border-right:none;
    border-top:none;
    border-bottom:2px solid ${props=>props.color};
    font-size:25px;
    font-amily:Roboto;
    background-color:transparent;
    color:${props => props.color};
    margin-right:60px;
    font-weight:bold;
    cursor:pointer;
}

@media screen and (max-width:767px){
    border-left:none;
    border-right:none;
    border-top:none;
    border-bottom:2px solid ${props=>props.color};
    font-size:25px;
    font-family:Roboto;
    background-color:transparent;
    color:${props => props.color};
    margin-right:40px;
    font-weight:bold;
    cursor:pointer;
}
@media screen and (max-width:767px){
    border-left:none;
    border-right:none;
    border-top:none;
    border-bottom:2px solid ${props=>props.color};
    font-size:18px;
    font-family:Roboto;
    background-color:transparent;
    color:${props => props.color};
    margin-right:40px;
    font-weight:bold;
    cursor:pointer;
}
@media screen and (max-width:375px){
    border-left:none;
    border-right:none;
    border-top:none;
    border-bottom:2px solid ${props=>props.color};
    font-size:15px;
    font-family:Roboto;
    background-color:transparent;
    color:${props => props.color};
    margin-right:40px;
    font-weight:bold;
    cursor:pointer;
}
`
export const Notag = style.p`
@media screen and (min-width:768px){
    color:#000000;
    font-size:40px;
    font-family:cursive;
    font-weight:bold;
}
@media screen and (max-width:767px){
    color:#000000;
    font-size:30px;
    font-family:cursive;
    font-weight:bold;
}
@media screen and (max-width:375px){
    color:#000000;
    font-size:20px;
    font-family:cursive;
    font-weight:bold;
}
`