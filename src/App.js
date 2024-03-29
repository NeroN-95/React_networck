import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import  {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/message'
                           render={ () =>  <DialogsContainer/> }/>
                    <Route path='/profile/:userId?'
                           render={ () =>  <ProfileContainer /> }/>
                    <Route path='/users'
                           render={ () =>  <UserContainer /> }/>
                </div>
            </div>

    );
}


export default App;
