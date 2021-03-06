import { useState } from "react";
import UserContext from './UserContext'
import axios from 'axios'
import { setCookie, setLocalStorage } from '../../helpers/auth'

const UserState = (props) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        id: "",
        username : ""
    })
    const host = "http://localhost:5000/api/";

    const getUser = async (authToken) => {
        // console.log(authToken)
        const response = await axios.get(host + "auth/getUser", {
            headers: {
                "auth-token": authToken
            }
        })
        console.log(response.data)

        if (response.data.success) {
            setLocalStorage('name', response.data.user.name);
            setLocalStorage('email', response.data.user.email);
            setLocalStorage('id', response.data.user._id);
            setLocalStorage('username', response.data.user.username)
            setUser({
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                id: localStorage.getItem('id'),
                username : localStorage.getItem('username')
            });
        }
    }


    const login = async (email, password) => {
        // console.log(email + " " + password)
        const response = await axios.post(host + "auth/login", {
            email, password
        });
        // console.log(response.data)
        if (response.data.success) {
            setCookie('token', response.data.authToken)
            await getUser(response.data.authToken)
            return true
        } else {
            return false
        }
    }

    const register = async (name, email, password, username) => {
        const response = await axios.post(host + "auth/createUser", {
            name,
            email,
            password,
            username
        })
        return (response.data.success)
    }

    return (
        <UserContext.Provider value={{ login, register, getUser, user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;