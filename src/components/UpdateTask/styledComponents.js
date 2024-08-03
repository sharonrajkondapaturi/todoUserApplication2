import style from 'styled-components'

export const Background = style.div`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   background-image:url('https://wallpapercave.com/wp/wp7881177.jpg');
    min-height:100vh;
    background-size:cover;
}
@media screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   background-image:url('https://wallpapercave.com/wp/wp7881177.jpg');
    min-height:120vh;
    min-width:376px;
    max-width:767px;
    background-size:cover;
}
@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   background-image:url('https://wallpapercave.com/wp/wp7881177.jpg');
    min-height:150vh;
    max-width:376px;
    min-width:0px
    background-size:cover;
    padding:40px;
}
`
export const Heading = style.h1`
font-family:cursive;
font-size:42px;
color:#000000;
text-align:center;
`

export const TodoForm = style.form`
@media screen and (min-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:0px;
    min-height:450px;
    width:500px;
    background-color:transparent;
}
@media screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:0px;
    min-height:450px;
    min-width:375px;
    max-width:450px;
    background-color:transparent;
    margin-left:10px;
    margin:0px;
}

@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:200px;
    align-items:flex-start;
    padding:0px;
    margin:0px;
    min-height:120vh;
    background-color:transparent;
}
`
export const TodoLabel = style.label`
@media screen and (min-width:768px){
    font-family:Roboto;
    font-size:25px;
    margin-bottom:10px;
    font-weight:bold;
}
@media screen and (max-width:767px){
    font-family:Roboto;
    font-size:16px;
    margin-bottom:10px;
    font-weight:bold;
}
@media screen and (max-width:375px){
    font-family:Roboto;
    font-size:15px;
    margin-bottom:10px;
    font-weight:bold;
}
`
export const TodoInput = style.input`
@media screen and (min-width:992px){
    width:400px;
    height:20px;
    padding:10px;
    border:none;
    margin-bottom:10px;
    font-size:18px;
    border-radius:10px;
    padding-left:14px;
}
@media screen and (max-width:991px){
    width:400px;
    height:20px;
    padding:10px;
    border:none;
    margin-bottom:10px;
    font-size:14px;
    border-radius:10px;
    padding-left:12px;   
}
@media screen and (max-width:767px){
    width:300px;
    height:15px;
    padding:10px;
    border:none;
    margin-bottom:10px;
    font-size:14px;
    border-radius:10px;
    padding-left:12px;
}
@media screen and (max-width:375px){
    width:200px;
    height:20px;
    padding:5px;
    border:none;
    margin-bottom:7px;
    border-radius:8px;
    font-size:10px;
    padding-left:10px;
}
`
export const UpdateTodo = style.button`
@media screen and (min-width:768px){
    border:none;
    color:#ffffff;
    font-family:Roboto;
    font-size:18px;
    padding:8px;
    border-radius:10px;
    background-color:#6b6dd6;
    width:420px;
    font-weight:Roboto;
    cursor:pointer;
    font-weight:bold;
    margin-top:10px;
}
@media screen and (max-width:767px){    
    border:none;
    color:#ffffff;
    font-family:Roboto;
    font-size:16px;
    padding:6px;
    border-radius:8px;
    background-color:#6b6dd6;
    width:320px;
    font-weight:Roboto;
    cursor:pointer;
    font-weight:bold;
    margin-top:8px;

}
@media screen and (max-width:375px){
    border:none;
    color:#ffffff;
    font-family:Roboto;
    font-size:14px;
    padding:6px;
    border-radius:8px;
    background-color:#6b6dd6;
    width:220px;
    font-weight:Roboto;
    cursor:pointer;
    font-weight:bold;
    margin-top:8px;
}
`

export const SelectPriority = style.select`
@media screen and (min-width:768px){
    width:420px;
    height:40px;
    padding:10px;
    border:none;
    margin-bottom:10px;
    font-size:15px;
    border-radius:10px;
    cursor:pointer;
}
@media screen and (max-width:767px){
    width:320px;
    height:30px;
    padding:5px;
    border:none;
    margin-bottom:10px;
    font-size:12px;
    border-radius:10px;
    cursor:pointer;
}
@media screen and (max-width:375px){
    width:220px;
    height:30px;
    padding:5px;
    border:none;
    margin-bottom:10px;
    font-size:12px;
    border-radius:10px;
    cursor:pointer; 
}
`
export const OptionPriority = style.option`
cursor:pointer;
`
export const TodoText = style.textarea`
@media screen and (min-width:768px){
    border:none;
    border-radius:10px;
    height:100px;
    padding:10px 10px 10px 10px;
    font-family:cursive;
    font-size:20px;
    font-weight:500;
    width:400px;
    margin-bottom:10px;
}
@media screen and (max-width:767px){
    border:none;
    border-radius:10px;
    height:100px;
    padding:10px 10px 10px 10px;
    font-family:cursive;
    font-size:18px;
    font-weight:500;
    width:300px;
    margin-bottom:10px;    
}
@media screen and (max-width:375px){
    border:none;
    border-radius:10px;
    height:100px;
    padding:10px 10px 10px 10px;
    font-family:cursive;
    font-size:15px;
    font-weight:500;
    width:200px;
    margin-bottom:10px;  
}
`