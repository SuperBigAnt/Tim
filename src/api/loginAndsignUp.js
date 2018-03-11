import {requestPost} from "../common/request";

//login
export const loginRequest=(data)=>{
    const url='/api/user/login'
    return requestPost(url, data)
}


//sign
export const signUpRequest=(data)=>{
    const url='/api/user/signup'
    return requestPost(url, data)
}