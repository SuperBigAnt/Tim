import React ,{Component} from 'react'
import png_arrow_down from "../../assert/image/arrow-down-b.png"
import png_arrow_right from "../../assert/image/arrow-right-b.png"
import './ClickBar.css'

export default class ClickBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrowDirection: png_arrow_right,
            list: null,
        }
    }

    handleClick(){
        //change arrowpng
        if(this.state.arrowDirection===png_arrow_down){
            this.setState({arrowDirection:png_arrow_right,
            list: null})
        }
        else{
            this.setState({arrowDirection: png_arrow_down,
            list: this.props.listContent})
        }

    }

    render (){
        return (
            <div className='clickBar' >
                <header className='clickBarHeader' onClick={()=>this.handleClick()}>
                <img className='clickBarImg' src={this.state.arrowDirection} alt=''/>
                    <h1 className='clickBarH1'>{this.props.frindsGroupName}</h1>
                <p className='clickBarP'>{this.props.onlineFriendsNumber+'/'+this.props.friendsNumber}</p>
                </header>
                {this.state.list}
            </div>
        )
    }
}