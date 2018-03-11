import React,{Component} from 'react'
import './SplitLine.css'

export default class SplitLine extends Component{
    handleColor=()=>{
        if(this.props.color==null){
            return '#ddd'
        }
        return this.props.color
    }
    handleHeight=()=>{
        if(this.props.height==null){
            return '1px'
        }
        return this.props.height
    }
    handleWidth=()=>{
        if(this.props.width==null){
            return '100%'
        }
        return this.props.width
    }



    render (){
        return(
            <div className='splitLine' style={{backgroundColor:this.handleColor(),
                height:this.handleHeight(),width:this.handleWidth(),}} >

            </div>
            )
    }
}