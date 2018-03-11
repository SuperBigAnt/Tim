import {combineReducers} from 'redux'
import {SWITCH_TAB} from "./action";
import {ADD_RECENTSTICKER} from "./action";

import {friendsInformation} from '../friends/reducers'
import {friendsGroups} from '../friends/reducers'



const initStickerContents=[{timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    recentFriendName:'小黑',
    previousMessage:'小黑小黑',
    previousMessageTime:'22:08',
    unreadMessageBadge:'20'},
    {timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        recentFriendName:'小黑',
        previousMessage:'小黑小黑',
        previousMessageTime:'22:08',
        unreadMessageBadge:'20'},{timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        recentFriendName:'小黑',
        previousMessage:'小黑小黑',
        previousMessageTime:'22:08',
        unreadMessageBadge:'20'},{timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        recentFriendName:'小黑',
        previousMessage:'小黑小黑',
        previousMessageTime:'22:08',
        unreadMessageBadge:'20'},{timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        recentFriendName:'小黑',
        previousMessage:'小黑小黑',
        previousMessageTime:'22:08',
        unreadMessageBadge:'20'},{timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        recentFriendName:'小黑',
        previousMessage:'小黑小黑',
        previousMessageTime:'22:08',
        unreadMessageBadge:'20'},{timHeadUrl:'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        recentFriendName:'小黑',
        previousMessage:'小黑小黑',
        previousMessageTime:'22:08',
        unreadMessageBadge:'20'},];

//当前tab标签位置
function tabNumber(state=1,action){
    switch(action.type){
        case SWITCH_TAB:
            return action.number
        default:
            return state
    }
}
//RecentSticker内容
function stickerContents(state=initStickerContents,action){
    switch(action.type){
        case ADD_RECENTSTICKER:
            return [
                ...state,
                action.stickerContents
            ]
        default :
            return state
    }
}



// reducers集合处


const homeHandleApp=combineReducers({
    tabNumber,
    stickerContents,
    friendsInformation,
    friendsGroups,
})

export default homeHandleApp