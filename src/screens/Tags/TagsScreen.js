import React, {useContext} from 'react';
import { RecipesContext } from '../../contexts/RecipesContext';
import BasicItemList from '../../components/BasicItemList';
import BasicItemNew from '../../components/BasicItemNew';
import BackButton from '../../components/BackButton';

export default () => {
    const {tags, addTag} = useContext(RecipesContext);
    return (
        <div className="Screen">
            <div className="Screen-form"><BasicItemNew addFunction={addTag} itemLabel="Tag"/></div>
            <div className="Screen-basiclist"><BasicItemList items={tags} target={'tag'}/></div>
            <div className="Screen-backbutton"><BackButton/></div>
        </div>
    )
}

