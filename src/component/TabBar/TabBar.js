import React,{Component} from "react"
import './TabBar.css'
import tab1_blue from '../../assert/image/chat0.png'
import tab1_gray from "../../assert/image/chat1.png"
import tab2_blue from '../../assert/image/document0.png'
import tab2_gray from '../../assert/image/document1.png'
import tab3_blue from '../../assert/image/briefcase0.png'
import tab3_gray from '../../assert/image/briefcase1.png'


export default class TabBar extends Component{

    handleIcon1=(tab)=>{
        if(tab===1){
            return tab1_blue
        }
        return tab1_gray
    }
    handleIcon2=(tab)=>{
        if(tab===2){
            return tab2_blue
        }
        return tab2_gray
    }
    handleIcon3=(tab)=>{
        if(tab===3){
            return tab3_blue
        }
        return tab3_gray
    }

    handleClick=(N)=>{
        this.props.onTabChanged(N)
    }
    handleContent=()=>{
        switch(this.props.tab){
            case 1:
                return this.props.contentOne
            case 2:
                return this.props.contentTwo
            case 3:
                return this.props.contentThree
        }
    }


    render() {
        return (
            <div className='tabBarContent'>
                {this.handleContent()}
                <div className='tabBar' >
                    <img onClick={()=>this.handleClick(1)} src={this.handleIcon1(this.props.tab)} alt=''/>
                    <img onClick={()=>this.handleClick(2)} src={this.handleIcon2(this.props.tab)} alt=''/>
                    <img onClick={()=>this.handleClick(3)} src={this.handleIcon3(this.props.tab)} alt=''/>
                </div>
            </div>
        )
    }
}