import axios from "axios";

const URL = "http://localhost:3000"

export async function getDoctors(){
    //"https://localhost:3000/doctors"
    const response = await axios.get(`${URL}/doctors`)
    if(response.status === 200){
        return response.data
    } else{
        return 
    }
}

export async function getDoctor(id){
    //"https://localhost:3000/doctors/12345"
    const response = await axios.get(`${URL}/doctors/${id}`)
    if(response.status === 200){
        return response.data
    } else{
        return 
    }
}

export async function createDoctor(post){
    //"https://localhost:3000/doctors"
    const response = await axios.post(`${URL}/doctors`, post)
    
    return response
}

export async function updateDoctor(id, post){
    //"https://localhost:3000/doctors"
    const response = await axios.put(`${URL}/doctors/${id}`, post)
    
    return response
}

export async function deleteDoctor(id){
    //"https://localhost:3000/doctors/12345"
    const response = await axios.delete(`${URL}/doctors/${id}`)
    
    return response
}

