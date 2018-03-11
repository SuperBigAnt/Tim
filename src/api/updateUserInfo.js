import {requestPost} from "../common/request"


export  const updateUserInfoRequest=(data)=>{
    const url='api/user/updateUserInfo'
    return requestPost(url, data)
}