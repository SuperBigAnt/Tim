import {List,SwipeAction} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React ,{Component} from 'react'
import './NewList.css'




export default class NewList extends Component{


    handleHeight=()=>{
        if(this.props.height==null){
            return '9vh'
        }
        return this.props.height
    }

    render(){
        return (
            <div className='newList' >
                <List >
                    <SwipeAction
                        style={{ backgroundColor: 'gray' }}
                        autoClose
                        right={this.props.swipeContent}
                        onOpen={()=>this.props.onOpen()}
                        onClose={()=>this.props.onClose()}
                    >
                    <List.Item style={{height:this.handleHeight()}} thumb={this.props.icon} arrow={this.props.arrow} onClick={this.props.onhandleClick} extra={this.props.extra} align={this.props.align}>
                        <p style={{fontSize: this.props.titleSize ,margin:'0', color:this.props.titleColor }}>{this.props.title}</p>
                        <List.Item.Brief style={{fontSize:this.props.contentSize,color:this.props.contentColor,margin:'0'}}>{this.props.content}</List.Item.Brief>
                    </List.Item>
                    </SwipeAction>
                </List>
            </div>
        )
    }
}
////////接口
// swipeContent
// onOpen
// onClose
// arrow
// onhandleClick
// extra
// align
// titleSize
// titleColor
// title
// contentSize
// contentColor
// content
//,border:'0 solid #ddd',borderBottomWidth:'1px'