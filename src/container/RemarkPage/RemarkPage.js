import React,{Component} from 'react'
import HeaderBar from "../../component/HeaderBar/HeaderBar"
import png_back from '../../assert/image/back_black.png'
import "./RemarkPage.css"
import SplitLine from "../../component/SplitLine/SplitLine"
import png_cancle from '../../assert/image/cancle-8a8a8a.png'
import {connect} from "react-redux"
import {changeFriendAlias} from "../../store/friends/action"
import {updateUserInfoRequest} from "../../api/updateUserInfo"

class RemarkPage extends Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.alias,
            number:0
        }
    }
    handleChange=(e)=>{
        const val=e.target.value
        let n=0
        for (let i = 0; i < val.length; i++) {
            if (val[i].match(/[^\x00-\xff]/ig) != null) {
                n += 3;
            }
            else {
                n += 1;
            }
        }

        this.setState({value:e.target.value,number:n})

    }
    handleCancle=()=>{
        this.setState({value:''})
    }

    handleCancleIcon=()=>{
        if(this.state.value===''){
            return null
        }
        return <img src={png_cancle} alt='' onClick={this.handleCancle}/>
    }
    handleKeyDown=(e)=>{
        if(e.keyCode===13&&this.state.number<=96){
            const id=window.recentFriendId
            this.props.dispatch(changeFriendAlias(id,this.state.value))
            let formdata = new FormData();
            ////用户id
            formdata.append('userId',10013)
            formdata.append('friendsId',window.recentFriendId)
            formdata.append('alias',this.state.value)
            updateUserInfoRequest(formdata).then(function(value){
                console.log(value)
            })
            window.setTimeout(()=>window.history.go(-1),1000)
        }
    }
    handleSize=()=>{
        if(this.state.number>96){
            return '内容超出！'+this.state.number+'/96'
        }
        return this.state.number+'/96'
    }
    handleRunBack=()=>{
        window.history.go(-1)
    }
    handleEnter=()=>{
        const id=window.recentFriendId
        this.props.dispatch(changeFriendAlias(id,this.state.value))
        let formdata = new FormData();
        ////用户id
        formdata.append('userId',10013)
        formdata.append('friendsId',window.recentFriendId)
        formdata.append('alias',this.state.value)
        updateUserInfoRequest(formdata).then(function(value){
            console.log(value)
        })
        window.setTimeout(()=>window.history.go(-1),1000)
    }



    render (){
        console.log(123,this.props.alias)
        return (
            <div className='remarkPage'>
                <HeaderBar title='备注' left='返回' right='完成'  leftIcon={png_back} onLeftClick={this.handleRunBack} onRightClick={this.handleEnter}/>
                <SplitLine/>
                <div className='remarkPage-input'>
                    <input type='text'  value={this.state.value} onKeyDown={(e)=>this.handleKeyDown(e)} onChange={(e)=>this.handleChange(e)}/>
                    {this.handleCancleIcon()}
                </div>
                <p className='remarkPage-p'>{this.handleSize()}</p>
            </div>
        )
    }
}



function select(state){
    return {
        alias: state.friendsInformation.filter((friend) => friend.id === window.recentFriendId)[0].alias
    }
}

export default connect(select)(RemarkPage)
