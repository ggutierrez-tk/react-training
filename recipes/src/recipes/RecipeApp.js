import React, {useContext, useEffect} from 'react';
import './RecipeApp.css';
import {Route, Redirect} from 'react-router-dom';
import Login from '../screens/Login/Login';
import Navbar from './Navbar';
import Logout from '../screens/Login/Logout';
import IngredientsScreen from '../screens/Ingredients/IngredientsScreen';
import RecipesScreen from '../screens/Recipes/RecipesScreen';
import TagsScreen from '../screens/Tags/TagsScreen';
import {SessionContext} from '../contexts/SessionContext';
import { RecipesContext } from '../contexts/RecipesContext';
import IngredientDetail from '../screens/IngredientDetail/IngredientDetail';
import TagDetail from '../screens/TagDetail/TagDetail';

export default function RecipeApp(){
    const {isLoggedIn} = useContext(SessionContext);
    const {refresh} = useContext(RecipesContext);
    useEffect(() => {
        refresh();
    }, [isLoggedIn])

    return (
        <div>
            {
                (isLoggedIn())
                ?<div className="test-centered"><Navbar /></div>
                :<Redirect to="/login"/>
            }
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={RecipesScreen} />
            <Route exact path="/recipes" component={RecipesScreen} />
            <Route exact path="/ingredients" component={IngredientsScreen} />
            <Route exact path="/tags" component={TagsScreen} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/ingredient/:ingredient_id" render={props => <IngredientDetail {...props} />}/>
            <Route exact path="/tag/:tag_id" render={props => <TagDetail {...props} />}/>
        </div>
    )
}