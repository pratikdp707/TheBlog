import React from 'react'

const PostDetail = () => {
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    return (
        <>
            <div className='container mt-2'>
                <img src={url} alt="" style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                <div className='py-2 d-flex justify-content-end'>
                    <button className='btn btn-outline-dark btn-sm me-2'><i class="fas fa-pencil-alt"></i></button>
                    <button className='btn btn-outline-danger btn-sm me-0'><i class="fas fa-trash-alt"></i></button>
                </div>
                <p className='fs-4 fw-bold text-center'>Blog Title</p>
                <div className='d-flex justify-content-between'>
                    <p className='fs-6 text-secondary'>Author : <span style={{fontWeight:"600"}}>Author Name</span></p>
                    <p className='fs-6 text-secondary'>05 March 2022</p>
                </div>
                <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos aspernatur fuga quod. Eum, ratione qui ea quisquam minus laboriosam numquam vitae praesentium consectetur veritatis, ipsam in. Dolores, blanditiis eligendi?</p>
            </div>
        </>
    )
}

export default PostDetail