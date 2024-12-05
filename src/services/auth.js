import httpClient from "./httpClient";

export const registerUser = async (data) =>{
    const response = await httpClient.post('/user', data)
    return response.data
};

export const loginUser = async(data)=>{
    const response = await httpClient.post('/user/login', data)
    return response.data
}