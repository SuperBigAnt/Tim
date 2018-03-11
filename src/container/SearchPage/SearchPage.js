import React,{Component} from 'react'
import './SearchPage.css'
import SearchBar from "../../component/SearchBar/SearchBar"


export default class SearchPage extends Component{
    handleClick=()=>{
        window.history.go(-1)
    }
    render(){
        return(
            <div className='searchPage'>
                <h1>
               <SearchBar color='#ddd' searchBarPlaceholder='搜索' />
                <p onClick={this.handleClick}>取消</p>
                </h1>
                <h2>支持搜索文件、聊天记录、收藏、联系人等</h2>
            </div>
        )
    }
}