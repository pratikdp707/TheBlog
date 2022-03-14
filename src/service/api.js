import axios from 'axios';

const host = "http://localhost:5000/api/"

export const createPost = async (post) => {
    try {
        const response = await axios.post(host+"post/create", post)
        return response
    } catch (error) {
        console.log("Error while calling createpost, "+error)
    }
    
}

export const getAllPosts = async(param) => {
    try {
        const response = await axios.get(host+"post/getAll"+param)
        return response.data
    } catch (error) {
        console.log("Error while calling getAllPosts, "+error)
    }
}

export const getPost = async(id) => {
    try{
        const response = await axios.get(host+"post/get/"+id)
        return response.data
    } catch(error) {
        console.log("Error while calling getPost, "+error)
    }
}

export const updatePost = async(id, post) => {
    try {
        const response  = await axios.put(host+"post/update/"+id, post);
        return response
    } catch (error) {
        console.log("Error while calling updatePost, ", error)
    }
}

export const deletePost = async(id, post) => {
    try {
        await axios.delete(host+"post/delete/"+id);
        
    } catch (error) {
        console.log("Error while calling deletePost, ", error);
    }
}

export const uploadFile = async(data) => {
    try {
        return await axios.post(host+"post/uploadFile", data)
    } catch (error) {
        console.log("Error while uploading image, ", error)
    }
}

export const newComment = async(data) => {
    try {
        await axios.post(host+"comment/newComment", data)
    } catch (error) {
        console.log("Error while calling newComment, ", error)
    }
}

export const getComment = async(id) => {
    try {
        let response = await axios.get(host+"comment/"+id);
        return response.data;
    } catch (error) {
        console.log("Error while calling getComments, ", error)
    }
}

export const deleteComment = async(id) => {
    try {
        return await axios.delete(host +"comment/"+id)
    } catch (error) {
        console.log("Error while calling deleteComment, ", error)
    }
}