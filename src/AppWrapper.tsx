import { Redirect, Route} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


//Page imports
import EntryPage from "./pages/EntryPage/EntryPage"
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';



const AppWrapper: React.FC = () => {

    const { user: currentUser } = useSelector((state: any) => state.isLoggedIn);

    if(!currentUser){
        return <Redirect to="/login" />
    }
        

   return(
    <div>
        <Route exact path={["/", "/home"]} component={EntryPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/home" component={MainPage} />
    </div>
   );
}

export default AppWrapper;
