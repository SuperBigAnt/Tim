
import React,{ Component } from 'react';
import {connect} from 'react-redux'
import HeaderBar from '../../component/HeaderBar/HeaderBar'
import {switchTab} from '../../store/home/action'
import './Home.css'
import png_people from '../../assert/image/friends.png'
import png_fileDownload from '../../assert/image/cloudfile.png'
import png_add from '../../assert/image/add.png'
import png_setting from '../../assert/image/setting.png'
import TabBar from "../../component/TabBar/TabBar"
import SearchBar from "../../component/SearchBar/SearchBar"
import NewList from "../../component/NewList/NewList"



 class Home extends Component {
     handleLeftIcon=()=>{
       switch(this.props.tabNumber){
         case 1:
             return png_people
         case 2:
             return png_fileDownload
         case 3:
             return null
         default:
             return null
       }
     }

     handleRightIcon=()=>{
         switch(this.props.tabNumber){
             case 1:
                 return png_add
             case 2:
                 return png_add
             case 3:
                 return png_setting
             default:
                 return null
         }
     }

     handleTitle=()=> {
         switch (this.props.tabNumber) {
             case 1:
                 return '消息'
             case 2:
                 return '云文件'
             case 3:
                 return "办公"
             default:
                 return '消息'
         }
     }
     handleTabChanged=(N)=>{
         const {dispatch}=this.props
        dispatch(switchTab(N))
     }
     handleOnFocus=()=>{
         window.location.hash='/searchPage'
     }
     handleOnLeftClick=()=>{
         if(this.props.tabNumber===1) {
             window.location.hash = '/friends'
         }
     }



    render() {
        const {tabNumber,visibilityStickerContents}=this.props
        return (
            <div className='home'>
            <HeaderBar onLeftClick={this.handleOnLeftClick} leftIcon={this.handleLeftIcon()} rightIcon={this.handleRightIcon()} title={this.handleTitle()}
                       backgroundColor='#4169E1' titleColor='white' />
                <SearchBar  color='#EAEAEA' searchBarPlaceholder='搜索' onFocus={this.handleOnFocus}/>


                <TabBar onTabChanged={(N)=>this.handleTabChanged(N)} tab={tabNumber}
                   contentOne={[<NewList key={1} height='9.4vh'  title='小黑' titleSize='2vh' content='小黑小黑' contentSize='1.8vh' extra='16:34' align='top' icon="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                              swipeContent={[
                                  {
                                      text: '置顶',
                                      onPress: () => console.log('cancel'),
                                      style: { backgroundColor: '#ddd', color: 'white' },
                                  },
                                  {
                                      text: '标为已读',
                                      onPress: () => console.log('delete'),
                                      style: { backgroundColor: '#FF9900', color: 'white' },
                                  },
                                  {
                                      text: '删除',
                                      onPress: () => console.log('delete'),
                                      style: { backgroundColor: '#F4333C', color: 'white' },
                                  },
                              ]}
                              onOpen={() => console.log('global open')}
                              onClose={() => console.log('global close')}/>,
                             <NewList key={2} height='9.4vh'  title='小黑' titleSize='2vh' content='小黑小黑' contentSize='1.8vh' extra='16:34' align='top' icon="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                             swipeContent={[
                                 {
                                     text: '置顶',
                                     onPress: () => console.log('cancel'),
                                     style: { backgroundColor: '#ddd', color: 'white' },
                                 },
                                 {
                                     text: '标为已读',
                                     onPress: () => console.log('delete'),
                                     style: { backgroundColor: '#FF9900', color: 'white' },
                                 },
                                 {
                                     text: '删除',
                                     onPress: () => console.log('delete'),
                                     style: { backgroundColor: '#F4333C', color: 'white' },
                                 },
                             ]}
                             onOpen={() => console.log('global open')}
                             onClose={() => console.log('global close')}
                    />]}
                />
            </div>
        )

    }
}

function select(state){
    return{
        tabNumber:state.tabNumber,
        visibilityStickerContents:state.stickerContents
    }
}


export default connect(select)(Home);