import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost, updatePost } from '../service/api'
import { useHistory } from 'react-router-dom'

const UpdatePost = () => {
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const [post, setPost] = useState({})
    const {id} = useParams();
    const history = useHistory();
    const updatePostfunc = async (e) => {
        e.preventDefault();
        await updatePost(id, post)
        history.push(`/details/${id}`);
    }

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id);
            setPost(data);
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="container mt-2">
                <img src={post.picture || url} alt="" style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                <form>
                    <div className='d-flex justify-content-between mt-2 mb-2'>
                        <input type="text" placeholder='Title' className='fs-4 input-title' name="title" value ={post.title} onChange={handleChange}/>
                        <button className='btn btn-large btn-dark' onClick={updatePostfunc}>Update Post</button>
                    </div>
                    
                    <textarea className='fs-5 input-description w-100 mt-2' type="text" rows={5} name="description" placeholder='Write your blog here...' value ={post.description} onChange={handleChange}></textarea>
                </form>
            </div>

        </>
    )
}

export default UpdatePost