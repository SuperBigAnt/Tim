import React,{Component} from 'react'
import './HeaderBar.css'




export default class HeaderBar extends Component {


    handleLeft=()=>{
        if(this.props.leftIcon==null){
            return <div style={{display:'block',width:'2vh',height:'2vh',backgroundColor:'rgba(0,0,0,0)'}}/>
        }
        return <img src={this.props.leftIcon} alt=''/>
    }

    handleRight=()=>{
        if(this.props.rightIcon==null){
            return <div style={{display:'block',width:'2vh',height:'2vh',backgroundColor:'rgba(0,0,0,0)'}}/>
        }
        return <img src={this.props.rightIcon} alt=''/>
    }
    handleHeaderBarBlank=()=> {
        if (this.props.block !== false) {
            return <div className='headerBarBlank'/>
        }
        return null
    }

    render() {
        return (
            <div>
            <div className='HeaderBar' style={{backgroundColor:this.props.backgroundColor,zIndex:'100'}}>
                <h1 onClick={this.props.onLeftClick}>
                    {this.handleLeft()}
                    <p style={{color:this.props.leftColor}}>{this.props.left}</p>
                </h1>

                <h2 style={{color:this.props.titleColor}}>{this.props.title}</h2>

                <h3 onClick={this.props.onRightClick}>
                    <p style={{color:this.props.rightColor}}>{this.props.right}</p>
                    {this.handleRight()}
                </h3>
            </div>
                {this.handleHeaderBarBlank()}

            </div>
        )
    }
}
