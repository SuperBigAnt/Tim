export const SWITCH_TAB='SWITCH_TAB';
export const ADD_RECENTSTICKER='ADD_RECENTSTICKER';


export function switchTab(number){
    return{type:SWITCH_TAB,number}
}

export function addRecentSticker(stickerContents){
    return {type:ADD_RECENTSTICKER,stickerContents}
}

