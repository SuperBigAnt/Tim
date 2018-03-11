import React,{Component} from 'react'
import './BlankBox.css'


export default class BlankBox extends Component{
    render (){
        return(
            <div className='blankBox' style={{width:this.props.width,height:this.props.height,backgroundColor:this.props.color}}/>
        )
    }
}