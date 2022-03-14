import React, { useState, useEffect } from 'react'
import { categories } from '../constants/data'
import { createPost, uploadFile } from '../service/api'
import { useHistory } from 'react-router-dom'
const initialValue = {
    title: "",
    description: "",
    picture: "",
    username: "pratik",
    category: "css",
    subcategory:"",
    createdDate: new Date()
}

const CreatePost = () => {

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const history = useHistory();
    const [post, setPost] = useState(initialValue)
    const [file, setFile] = useState('')

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        console.log(post)
    }

    const publishPost = async (e) => {
        e.preventDefault();
        await createPost(post)
        history.push('/')
    }

    useEffect(() => {
        const getImage = async() => {
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file)

                uploadFile(data);
            }
        }
        getImage();
    }, [file])
    

    return (
        <>
            <div className="container mt-2">
                <img src={url} alt="" style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                <form>
                    <div className='d-flex justify-content-between mt-2 mb-2'>
                        
                        <input type="file" id="picture-input" className='d-none' onChange={(e) => setFile(e.target.files[0])}/>
                        <input type="text" placeholder='Title' className='fs-4 input-title' name="title" value={post.title} onChange={handleChange} />
                        <button className='btn btn-large btn-dark' onClick={publishPost}>Publish Post</button>
                    </div>
                    <select class="form-select input-category" name= "category" onChange={handleChange} aria-label="Default select example">
                        <option selected>Select Category</option>
                        {categories.map(category => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                    <input type="text" placeholder='Sub Category' className='fs-5 mt-2 input-title' name="subcategory" value={post.subcategory} onChange={handleChange} />
                    <textarea className='fs-5 input-description w-100 mt-2' type="text" rows={5} name="description" placeholder='Write your blog here...' value={post.description} onChange={handleChange}></textarea>
                </form>
            </div>

        </>
    )
}

export default CreatePost