import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'
import Login from './components/Login'
import TaskInput from './components/TaskInput'
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask'
import UserDetails from './components/UserDetails'
import NoPageFound from './components/NoPageFound'
import './App.css'

//This is the Primary components where it routes the page Register and Login component are open components 
//where as the remaining are not it should be logged and then it will be redirected to homepage,editpage and addpage
//if the page is not found it will route to No Page Found

const App = ()=>(
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route element={<ProtectedRoute/>}>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/" element={<TaskInput/>}/>
         <Route path="/addtodos" element={<AddTask/>}/>
         <Route path="/updatetodos" element={<UpdateTask/>}/>
         <Route path="/userTodo" element={<UserDetails/>}/>
    </Route>
    <Route path="*" element={<NoPageFound/>}/>
  </Routes>
  </BrowserRouter>
  
)

export default App;
