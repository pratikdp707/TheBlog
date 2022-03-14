import React, { useContext } from 'react'
import { categories } from '../constants/data'
import { Link } from 'react-router-dom'
import userContext from '../context/user/UserContext';
const Categories = () => {

    const context = useContext(userContext);
    const { user } = context;
    return (
        <>
            <Link to={`/?username=${user.username.substring(1, user.name.length - 1)}`}><button className={`btn btn-large btn-outline-dark w-100 ms-3 mt-3 ${user.username === "" ? "d-none" : ""}`}>Your Blogs</button></Link>
            <Link to="/create"><button className={`btn btn-large btn-dark w-100 ms-3 mt-2 mb-2 ${user.username === "" ? "d-none" : ""}`}>Create Blog</button></Link>

            <table className="table ms-3">
                <thead>
                    <tr>
                        <th>All Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category}>
                            <th>{category}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Categories