import React from 'react'
import { categories } from '../constants/data'
import {Link} from 'react-router-dom'
const Categories = () => {
    return (
        <>
            <Link to="/create"><button className='btn btn-large btn-dark w-100 m-3'>Create Blog</button></Link>
            <table className="table ms-3">
                <thead>
                    <tr>
                        <th>All Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr>
                            <th>{category}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Categories