export const GET_FRIENDS_INFORMATION ='GET_FRIENDS_INFORMATION';
export const GET_FRIENDS_GROUP_NAME='GET_FRIENDS_GROUP_NAME'
export const CHANGE_FRIEND_GROUP='CHANGE_FRIEND_GROUP'
export const CHANGE_FRIEND_ALIAS='CHANGE_FRIEND_ALIAS'


export function getFriendsInformation(data){
    return {type:GET_FRIENDS_INFORMATION,data}
}

export function getFriendsGroupName(friendsGroups){
    return {type:GET_FRIENDS_GROUP_NAME,friendsGroups}
}

export function changeFriendGroup(id,index){
    return {type:CHANGE_FRIEND_GROUP,id,index}
}

export function changeFriendAlias(id,value){
    return {type:CHANGE_FRIEND_ALIAS,id,value}
}