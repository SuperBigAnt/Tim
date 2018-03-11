import React,{Component} from 'react'
import {connect} from 'react-redux'
import {changeFriendGroup} from "../../store/friends/action"
import"./ChangeGroup.css"
import HeaderBar from "../../component/HeaderBar/HeaderBar"
import png_left from '../../assert/image/back_black.png'
import NewList from "../../component/NewList/NewList"
import png_checkMark from '../../assert/image/icon_checkbox_select.png'
import {updateUserInfoRequest} from "../../api/updateUserInfo"


class ChangeGroup extends Component {
    constructor(props){
        super(props)
        this.userId = '10013'
        this.state={
            block:'changeGroup-none'
        }
    }


    handleChangeGroup=(index)=>{
        const id=window.recentFriendId
        ////出现蒙版
        this.setState({block:'changeGroup-full'})
        this.props.dispatch(changeFriendGroup(id,index))
        let formdata = new FormData();
        ////用户id
        formdata.append('userId',10013)
        formdata.append('friendsId',window.recentFriendId)
        formdata.append('group',index)
        updateUserInfoRequest(formdata).then(function(value){
            console.log(value)
        })
        window.setTimeout(()=>{window.location.hash='/personalPage'},1000)

    }
    handleRunBack=()=>{
        window.location.hash='/personalPage'
    }

    render(){
        const {groups,friend}=this.props
        return (
            <div className='changeGroup'>
                <div className={this.state.block}>
                    <div className='changeGroup-center'>
                    <img src={png_checkMark} alt=''/>
                        <p>设置成功</p>
                    </div>
                </div>
                <HeaderBar title='移动分组' left='返回' leftIcon={png_left} backgroundColor='white'
                onLeftClick={this.handleRunBack}/>
                <h1 className='ChangeGroup-h1'>
                <NewList  arrow='horizontal' title="添加到新分组" height='4vh' titleSize='2.4vh'/>
                </h1>
                <h2 className='changeGroup-Groups'>
                    {groups.map((group,index)=><NewList key={index} arrow={friend.group===index?'horizontal':null}
                      title={group} titleSize='2.4vh' height='4vh'
                      onhandleClick={()=>this.handleChangeGroup(index)}/>)}
                </h2>
            </div>

        )

    }
}

function select(state){
    return{
        friend:state.friendsInformation.filter((friend)=>friend.id===window.recentFriendId)[0],
        groups:state.friendsGroups
 }}


export default connect(select)(ChangeGroup)