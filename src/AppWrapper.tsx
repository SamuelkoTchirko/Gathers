import { Redirect, Route} from 'react-router-dom';
import { BrowserRouter as Router, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


//Page imports
import EntryPage from "./pages/EntryPage/EntryPage"
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import EventPage from "./pages/EventPage/EventPage"


const AppWrapper: React.FC = () => {

    const location = useLocation();
    const { user: currentUser } = useSelector((state: any) => state.isLoggedIn);

    if(!currentUser){
        return (
            <>
                {location.pathname != "/register" ? 
                    <Redirect to="/login"></Redirect>
                    :
                    <Redirect to="/register"></Redirect>
                }
            </>
        )
    }
        

   return(
    <div>
        <Route exact path={["/", "/home"]} component={EntryPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/events" component={EventPage} />
    </div>
   );
}

export default AppWrapper;
