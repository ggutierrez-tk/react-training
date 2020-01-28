import React from 'react';
import RecipeApp from './recipes/RecipeApp';
import {SessionContextProvider} from './contexts/SessionContext';
import {RecipesContextProvider} from './contexts/RecipesContext';
function App() {
  return (
      <SessionContextProvider><RecipesContextProvider><RecipeApp /></RecipesContextProvider></SessionContextProvider>
    );
}

export default App;
