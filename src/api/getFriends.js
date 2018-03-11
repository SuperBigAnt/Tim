import {requestGet} from "../common/request";

export  const getFriendsRequest=(id)=>{
    const url='/api/user/getFriends?userId='+ id;
    return requestGet(url)
}