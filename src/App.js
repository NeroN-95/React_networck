import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import  {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UsersContainer';

const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/message'  render={ () =>  <DialogsContainer/> }/>
                    <Route path='/profile'  render={ () =>  <ProfileContainer /> }/>
                    <Route path='/users'    render={ () =>  <UserContainer /> }/>
                </div>
            </div>

    );
}


export default App;
