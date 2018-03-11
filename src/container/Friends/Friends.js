import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getFriendsInformation,getFriendsGroupName} from '../../store/friends/action'
import {getUserInfoRequest} from "../../api/getUserInfo"
import ClickBar from '../../component/UnfoldBar/ClickBar'
import UnfoldBar from '../../component/UnfoldBar/UnfoldBar'
import SearchBar from '../../component/SearchBar/SearchBar'
import HeaderBar from "../../component/HeaderBar/HeaderBar"
import {getFriendsRequest} from '../../api/getFriends'
import png_back from '../../assert/image/arrow-right.png'
import png_newFriends from '../../assert/image/newFriends.png'
import png_friendsGroup from '../../assert/image/friendsGroup.png'
import png_card from '../../assert/image/card.png'
import "./Friends.css"


export  class Friends extends Component{
    constructor(props){
        super(props)
        this.userId = '10013'
    }


    handleOnlineNumber(friendsGroup,index){

        let onlineNumber=0
        this.props.friendsInformation.filter((friend)=>friend.group===index).forEach((friend)=>{if (friend.online===true){
        onlineNumber += 1
        }})
        return onlineNumber
    }


    handleRunRight=()=>{
        window.location.hash='/home'
    }

    handleRunPersonal=(e,id)=>{
         console.log(id)
        window.recentFriendId=id
        window.location.hash='/personalPage'
    }


    componentWillMount(){
        const {dispatch}=this.props
        getFriendsRequest(this.userId).then((value)=>{
            console.log(value.data)
           dispatch(getFriendsInformation(value.data))
            // let groupName=[]
            // value.data.forEach((information)=>{
            //     if(groupName.length===0||!groupName.includes(information.group)){
            //         groupName.push(information.group)
            //     }
            // })
            // dispatch(getFriendsGroupName(groupName))
        })
        getUserInfoRequest(this.userId).then((value)=> {
            console.log(value.data)
            dispatch(getFriendsGroupName(value.data.groupInfo))
        })
    }

    handleOnFocus=()=>{
        window.location.hash='/searchPage'
    }



    render(){
        const {friendsGroups,friendsInformation}=this.props
        return(
            <div className='friends'>
                {/*<header className='friendsHeader'>*/}
                    {/*<h1 >添加</h1>*/}
                    {/*<h2>联系人</h2>*/}
                    {/*<img src={png_back} alt=''  onClick={this.handleRunRight} />*/}
                {/*</header>*/}
                <HeaderBar left='添加' title='联系人' rightIcon={png_back} backgroundColor='#e5e5e5'
                           onRightClick={this.handleRunRight}/>


                <SearchBar searchBarPlaceholder='搜索' color=' #eaeaea' onFocus={this.handleOnFocus}/>

                <div className='friendsTipPart' >
                   <div>
                       <img src={png_newFriends} alt=''  />
                       <p>新朋友</p>
                   </div>
                    <div>
                    <img src={png_friendsGroup} alt=''  />
                        <p>群聊</p>
                    </div>
                    <div>
                    <img src={png_card} alt='' />
                        <p>名片夹</p>
                    </div>
                </div>




                {friendsGroups.map((friendsGroup,index)=>
                    <ClickBar key={index}  frindsGroupName={friendsGroup}
                              onlineFriendsNumber={this.handleOnlineNumber(friendsGroup,index)}
                              friendsNumber={friendsInformation.filter((friend)=>(friend.group===index)).length}
                listContent={friendsInformation.filter((friends)=>friends.group===index).map((friend,index)=>
                    <UnfoldBar onHandleClick={(e)=>this.handleRunPersonal(e,friend.id)} key={index} friendName={friend.name} avatar={friend.avatar}/>)}/>)}

            </div>
        )
    }
}

function select(state){
    return{
        friendsGroups:state.friendsGroups,
        friendsInformation:state.friendsInformation,
    }
}

export default connect(select)(Friends);