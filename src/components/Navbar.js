import React, { useContext, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import userContext from '../context/user/UserContext';
import { getCookie, removeCookie, removeLocalStorage } from '../helpers/auth';

const Navbar = () => {

    const location = useLocation();
    const history = useHistory();
    const context = useContext(userContext);
    const { user, setUser } = context;
    // console.log(user)

    const handleSignOut = (e) => {
        // e.preventDefault();
        setUser({
            name: "",
            email: "",
            id: "",
            username : ""
        })
        removeCookie('token')
        removeLocalStorage('name');
        removeLocalStorage('email');
        removeLocalStorage('id');
        removeLocalStorage('username')
        history.push('/');
    }

    // useEffect(() => {
    //   getUser(authToken)
    // }, [])
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Contact</a>
                        </li>

                    </ul>

                    <h4 className='text-white pt-2 ms-auto'>{user.name ? user.name.substring(1, user.name.length - 1) : ""}</h4>
                    <button className={`ms-3 me-5 btn btn-outline-light ${user.name !== "" ? "" : "d-none"}`} onClick={handleSignOut}>Log Out</button>
                    <button className={`ms-3 me-5 btn btn-outline-light ${user.name === "" ? "" : "d-none"}`} onClick={()=> history.push('/signin')}>Log In</button>

                    {/* <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/signin' ? "active" : ""} ${user ? "d-none" : ""}`} to="/signin">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${user.name !== "" ? "" : "d-none"}`} to="/signin" onClick={handleSignOut}>Logout</Link>
                        </li>
                    </ul> */}
                    {/* <h4 className='text-light pt-2 mx-5'>{user.name ? user.name.substring(1, user.name.length - 1) : ""}</h4> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar