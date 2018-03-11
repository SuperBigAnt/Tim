import React,{Component} from 'react'
import './Login.css'
import {loginRequest} from "../../api/loginAndsignUp";


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }


    handleUserNameChange(e){

            this.setState({userName: e.target.value})

    }

    handlePasswordChange(e){

        this.setState({password:e.target.value})
    }

    handleClick(){
        let formdata = new FormData();
        formdata.append('userId',this.state.userName)
        formdata.append('password',this.state.password)


        loginRequest(formdata).then(function(value){
            console.log(value)
        })

    }

    handleRunSignUp=()=>{
        window.location.hash='/signUp'
    }



    render(){
        return(
            <div className='login'>
                <img className='loginImg' src='https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png' alt="" />

                    <input placeholder="QQ号/手机号/邮箱"  className='loginUserName' type='text' onChange={(e)=>this.handleUserNameChange(e)} value={this.state.userName}/>

                    <input placeholder='密码' className="loginPassword" type='password' onChange={(e)=>this.handlePasswordChange(e)} value={this.state.password}/>

                    <button type='button' onClick={this.handleClick} >登录</button>

                <p className="loginA1" onClick={this.handleRunSignUp}>新用户注册</p>
                <p className="loginA2">无法登陆？</p>
            </div>
        )
    }
}