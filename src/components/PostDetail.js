import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost, deletePost } from '../service/api'
import { Link, useHistory } from 'react-router-dom'
import userContext from '../context/user/UserContext'
import Comments from './Comments'
const PostDetail = () => {

    const context = useContext(userContext)
    const {user} = context;
    const [post, setPost] = useState({})
    const { id } = useParams()
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const history = useHistory();
    const deletePostFunc = async (e) => {
        e.preventDefault();
        await deletePost(id);
        history.push('/')
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost(id);
            console.log(data)
            setPost(data);
        }
        fetchData()
    }, [])

    return (
        <>
            <div className='container mt-2'>
                <img src={post.picture || url} alt="" style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                <div className='py-2 d-flex justify-content-end'>
                    <Link to={`/update/${id}`}><button className={`btn btn-outline-dark btn-sm me-2 ${post.username === user.username.substring(1, user.username.length - 1) ? "" : "d-none"}`}><i className="fas fa-pencil-alt"></i></button></Link>
                    <button className={`btn btn-outline-danger btn-sm me-0 ${post.username === user.username.substring(1, user.username.length - 1) ? "" : "d-none"}`} onClick={deletePostFunc}><i className="fas fa-trash-alt"></i></button>
                </div>
                <p className='fs-4 fw-bold text-center'>{post.title}</p>
                <div className='d-flex justify-content-between'>
                    <Link to={`/?username=${post.username}`} style={{textDecoration: "none"}}>
                        <p className='fs-6 text-secondary'>Author : <span style={{ fontWeight: "600" }}>{post.username}</span></p>
                    </Link>
                    <p className='fs-6 text-secondary'>{new Date(post.createdDate).toLocaleString()}</p>
                </div>
                <p className='fs-6'>{post.description}</p>
                <Comments username={post.username} id={post._id}/>
            </div>
        </>
    )
}

export default PostDetail