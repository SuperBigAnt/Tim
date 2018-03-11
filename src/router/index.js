import  React ,{Component} from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from '../container/Home/Home'
import Login from '../container/Login/Login'
import SignUp from '../container/SignUp/SignUp'
import Friends from '../container/Friends/Friends'
import PersonalPage from '../container/PersonalPage/PersonalPage'
import SearchPage from '../container/SearchPage/SearchPage'
import ChangeGroup from '../container/ChangeGroup/ChangeGroup'
import RemarkPage from '../container/RemarkPage/RemarkPage'


export default class RouterConfig extends Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path='/signUp'  component={SignUp}/>
                    <Route path='/login'  component={Login} />
                    <Route path='/home' component={Home} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/personalPage' component={PersonalPage} />
                    <Route path='/searchPage' component={SearchPage}/>
                    <Route path='/changeGroup' component={ChangeGroup}/>
                    <Route path='/remarkPage' component={RemarkPage}/>
                    <Redirect to='/login' />
                </Switch>
            </HashRouter>
        )
    }
}

