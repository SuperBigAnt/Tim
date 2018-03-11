
import {requestGet} from "../common/request"

export  const getUserInfoRequest=(id)=>{
    const url='/api/user/getUserInfo?userId='+ id;
    return requestGet(url)
}