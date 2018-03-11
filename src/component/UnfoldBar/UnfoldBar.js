import React,{Component} from 'react'
import './UnfoldBar.css'

export default class UnfoldBar extends Component {
    render(){
        return(
            <div className='unfoldBar' onClick={this.props.onHandleClick}>
              <img className='unfoldBarImg' src={this.props.avatar} alt='' />
                <p className='UnfoldBarFriendName'>{this.props.friendName}</p>
            </div>
        )
    }
}