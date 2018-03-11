import {GET_FRIENDS_INFORMATION,GET_FRIENDS_GROUP_NAME,CHANGE_FRIEND_GROUP,CHANGE_FRIEND_ALIAS} from "./action"


export  function friendsInformation(state=[],action){
    switch (action.type){
        case GET_FRIENDS_INFORMATION:
            return action.data
        case CHANGE_FRIEND_GROUP:
            let n=0
            state.forEach((friend,index)=>{
                if(friend.id===action.id){
                    n=index
                }})
            return [...state.slice(0,n),
            Object.assign({},state[n],{group:action.index}),
                ...state.slice(n+1)]
        case CHANGE_FRIEND_ALIAS:
            let r=0
            state.forEach((friend,index)=>{
                if(friend.id===action.id){
                    r=index
                }})
            return [...state.slice(0,r),
                Object.assign({},state[r],{alias:action.value}),
                ...state.slice(r+1)]
        default :
            return state
    }
}

export  function friendsGroups(state=[],action){
    switch(action.type){
        case GET_FRIENDS_GROUP_NAME:
            console.log(['我的好友',
                ...action.friendsGroups])
            return ['我的好友',
                ...action.friendsGroups]
        default:
            return state
    }
}


