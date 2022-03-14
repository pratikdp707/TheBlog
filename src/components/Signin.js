import React, { useContext, useState } from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import userContext from '../context/user/UserContext';
import { ToastContainer, toast } from 'react-toastify'
const Signin = (props) => {

    const context = useContext(userContext);
    const {login} = context;

    const history =  useHistory()

    const [cred, setCred] = useState({
        email : "",
        password : ""
    })

    const onChange = (e) => {
        setCred({...cred, [e.target.name]: e.target.value})
    }


    const handleClick =  async (e) => {
        e.preventDefault();
        if(await login(cred.email, cred.password)){
            toast.success("Log In successfull");
            // props.setAuthuser(true);
            setTimeout(() => {
                history.push('/')    
            }, 3000);  
        } else {
            toast.error("Wrong email or password")
        }
    }

  return (
      <>
      <div className='bg-light min-vh-100 pt-5 text-center'>
            <ToastContainer />
            <div className="auth-container p-5">
                <h2 className='text-light mt-5'>Sign In to</h2>
                <h1 className='text-light mt-0'>The Blog</h1>
                <form action="" className='mb-5'>
                    <input type="email" className="auth-input form-control mt-5 mb-3" placeholder='Email / Username' name="email" id="email" onChange={onChange}/>
                    <input type="password" className="auth-input form-control" placeholder='Password' name="password" id="password" onChange={onChange}/>
                    <button className='btn auth-button btn-outline-light mt-3' onClick={handleClick}>Sign In</button>
                    <Link className="auth-link" to="/signup"><p className='mt-2'><span className='auth-link-light'>Not Registered?</span> Sign Up Now</p></Link>
                </form>
            </div>
        </div>
      </>
  )
}

export default Signin