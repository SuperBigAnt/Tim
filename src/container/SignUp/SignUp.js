import React,{Component} from "react"
import png_back_white from '../../assert/image/back_white.png'
import png_selected_blue from "../../assert/image/selected_blue.png"
import './SignUp.css'
import {signUpRequest} from "../../api/loginAndsignUp";

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleUserNameChange(e){

        this.setState({userName: e.target.value})

    }

    handlePasswordChange(e){

        this.setState({password:e.target.value})
    }

    handleClick(){
        let formdata = new FormData();
        formdata.append('name',this.state.userName)
        formdata.append('password',this.state.password)

        signUpRequest(formdata).then(function(value){
            console.log(value)
        })

    }

    handleRunBack=()=>{
        window.history.go(-1)
    }

    render(){
        return(
            <div className='signUp'>
                <header className='signUpHeader'>
                    <img  src={png_back_white} alt='' onClick={()=>this.handleRunBack()}/>
                    <p onClick={()=>this.handleRunBack()}>返回</p>
                </header>

                <input className='signUpCount' placeholder='输入账号' type='text' onChange={(e)=>this.handleUserNameChange(e)} value={this.state.userName} />
                <input className='signUpPassword' placeholder='输入密码' type='text' onChange={(e)=>this.handlePasswordChange(e)} value={this.state.password} />
                <input className='signUpButton' type='button' value='注册' onClick={() =>this.handleClick()} />

                <h2 className='signUpH2'><img src={png_selected_blue} alt="" />阅读并同意<span>使用条款</span>和<span>隐私政策</span></h2>
            </div>
        )
    }
}