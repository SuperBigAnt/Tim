import React ,{Component} from 'react'
import png_back from '../../assert/image/back_white.png'
import "./PersonalPage.css"
import png_boy from '../../assert/image/boy.png'
import png_girl from '../../assert/image/girl.png'
import NewList from '../../component/NewList/NewList'
import {connect} from 'react-redux'
import HeaderBar from '../../component/HeaderBar/HeaderBar'
import BlankBox from "../../component/BlankBox/BlankBox"






 class PersonalPage extends Component{


    handleAge=(x,n)=>{
        if(x===null){
        x=19960720
        }
        const y=Math.floor(x/10000)
        const m=Math.floor((x-10000*y)/100)
        const d=(x-10000*y-100*m)
        const age=2018-y
        if(n===1){
            return `${age}` +'岁'
        }
        return `${m}`+'月'+`${d}`+'日（公历）'
    }

    handleRunBack=()=>{
        window.location.hash='/friends'
    }
    changeInstruction=()=>{

    }
    changeGroup=()=>{
        window.location.hash='/changeGroup'
    }
    changeAlias=()=>{
       window.location.hash='/remarkPage'
    }
    handleSex=()=>{
        if(this.props.sex===2){
            return png_girl
        }
        return png_boy
    }

    render (){
        const {friend,groupName}=this.props
       console.log(friend,groupName)
        return (
            <div className='personalPage'>

                    <HeaderBar leftIcon={png_back} left='返回' leftColor='white' right='更多'
                               backgroundColor='rgba(0,0,0,0)' rightColor='white' block={false}
                               onLeftClick={this.handleRunBack}/>

                    <div className='personalPageAvatar'
                         style={{background:`url(${friend.avatar})`,
                                 backgroundSize:'100vw',
                                 backgroundPosition:'0 center',}}>
                    </div>

                <div className='avatarDark'>
                    <p>{friend.alias==null?friend.name:friend.alias}</p>
                    <img src={this.handleSex()} alt=''  />
                    <p className='signature'>{friend.personalSignature===''?'未填写个性签名':friend.personalSignature}</p>
                    <p className='age'>{this.handleAge(friend.birthday,1)}</p>
                </div>

                  <NewList height='8vh' titleSize='1.8vh' titleColor='#999999' title='账号' contentSize='2.3vh'  contentColor='black' content={friend.id} />
                  <NewList height='8vh' titleSize='1.8vh' titleColor='#999999' title='昵称' contentSize='2.3vh'  contentColor='black' content={friend.name} />
                  <NewList height='8vh' arrow='horizontal' titleSize='1.8vh' titleColor='#999999' title='空间' contentSize='2.3vh'  contentColor='black' content={friend.personalInstruction===''?'未填写':friend.personalInstruction}
                  onhandleClick={this.changeInstruction}/>
                  <NewList height='8vh' arrow='horizontal' titleSize='1.8vh' titleColor='#999999' title='分组' contentSize='2.3vh'  contentColor='black' content={groupName[friend.group]}
                  onhandleClick={this.changeGroup}/>
                  <NewList height='9vh' arrow='horizontal' titleSize='1.8vh' titleColor='#999999' title='备注名' contentSize='2.3vh'  contentColor='black' content={friend.alias==null?'未填写':friend.alias}
                  onhandleClick={this.changeAlias}/>
                  <div  className='personalPageMiddle'>
                  </div>
                  <NewList height='8vh' arrow='horizontal' titleSize='1.8vh' titleColor='#999999' title='个人' contentSize='2.3vh'  contentColor='black' content={this.handleAge(friend.birthday,2)} />
                  <NewList height='8vh' arrow='horizontal' titleSize='1.8vh' titleColor='#999999' title='学校' contentSize='2.3vh'  contentColor='black' content={friend.school===''?'未填写':friend.school} />
                  <NewList height='8vh' arrow='horizontal' titleSize='1.8vh' titleColor='#999999' title='邮箱' contentSize='2.3vh'  contentColor='black' content={friend.school===''?'未填写':friend.school} />
                  <BlankBox height='6vh'/>
                <div className='personalChatBtn'>发消息</div>
            </div>
        )
    }
}


function select(state){
    ////////////////////////////////
    console.log(window.recentFriendId)
    return{
        friend:state.friendsInformation.filter((friend)=>friend.id===window.recentFriendId)[0],
        groupName:state.friendsGroups
    }
}
export default connect(select)(PersonalPage)