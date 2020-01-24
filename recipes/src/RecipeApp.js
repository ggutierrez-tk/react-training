import React, {useContext} from 'react';
import './RecipeApp.css';
import {Route, Redirect} from 'react-router-dom';
import Login from './session/Login';
import Navbar from './Navbar';
import Landing from './Landing';
import Logout from './session/Logout';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import {SessionContext} from './contexts/SessionContext';

function RecipeApp(){
    const {isLoggedIn} = useContext(SessionContext);
    return (
        <div>
            {
                (isLoggedIn())
                ?
                <div className="test-centered"> 
                    <Navbar />
                </div>
                :
                <div>
                    <Redirect to="/login"/>
                </div>
            }
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route exact path="/logout" component={Logout} />
        </div>
    )
}

export default RecipeApp;