import React ,{useState} from 'react'

import {useNavigate} from 'react-router-dom'
function Register() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [error,setError]=useState("false")
   
    const [errorMessage,setErrorMessage]=useState(0)
    

    const navigate=useNavigate();
    async function signUp()
    {
        // let item={name,password,email}
        // console.warn(item)
        if(name.length==0||password.length==0||email.length==0){
            setError(true)
            setErrorMessage(1)
        }
        else if(password.length<8)  {
              setError(true)
              setErrorMessage(1)
            }
          
        
       
        else
        {
             let item={name,password,email}
             console.warn(item)
            

          let result= await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
         })
         result = await result.json()
         localStorage.setItem("user-info",JSON.stringify(result))
         navigate("/login");
        }
    }
  return (
   
    
    <div className='col-sm-6 offset-sm-3'>
        <h1>Register Page</h1>
        
        <input type="text"
         value={name} 
         onChange={(e)=>setName(e.target.value)} 
         className="form-control" placeholder='name'/>
         
       
        {error&&errorMessage&&name.length<=0?
        <label>Name can't be Empty</label>:""}
        <br />
        <input type="password"
         value={password} 
         onChange={(e)=>setPassword(e.target.value)} 
         className="form-control" placeholder='password'/>
         
        
        {error&&errorMessage&&password.length<=0?
        <label>Password can't be Empty</label>:error&&errorMessage&&password.length<8?
        <label>Password can't be less than 8 </label>:""}
        <br />
        {/* {error&&errorMess&&password.length<8?
        <label>Password can't be less than 8 </label>:""}   */}
        
        <input type="text"
         value={email}
         onChange={(e)=>setEmail(e.target.value)} 
         className="form-control" placeholder='email'/>
        {error&&errorMessage&&email.length<=0?
        <label>Email can't be Empty</label>:""}
        <br />
        <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
        <br />
    </div>

  )
}

export default Register;