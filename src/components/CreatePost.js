import React from 'react'
import { categories } from '../constants/data'
const CreatePost = () => {

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    return (
        <>
            <div className="container mt-2">
                <img src={url} alt="" style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                <form>
                    <div className='d-flex justify-content-between mt-2 mb-2'>
                        <input type="text" placeholder='Title' className='fs-4 input-title' name="title" />
                        <button className='btn btn-large btn-dark'>Publish Post</button>
                    </div>
                    <select class="form-select input-category" aria-label="Default select example">
                        <option selected>Select Category</option>
                        {categories.map(category => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                    <textarea className='fs-5 input-description w-100 mt-2' type="text" rows={5} name="description" placeholder='Write your blog here...'></textarea>
                </form>
            </div>

        </>
    )
}

export default CreatePost