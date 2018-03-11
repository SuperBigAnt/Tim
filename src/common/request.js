import axios from 'axios'


//axios.get的封装 返回promise
export function requestGet(url){
    return axios.get(url)
        .then((res)=>{
            return Promise.resolve(res.data)
        })
}



//post 封装
export function requestPost(url,data) {
    return axios.post(url,data)
        .then((res)=>{
            return Promise.resolve(res.data)
        })
}

