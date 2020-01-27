import React from 'react';
import BasicItemDetail from '../../components/BasicItemDetail';
import BackButton from '../../components/BackButton';

import '../../styles/Screen.css'

export default (props) => {
    const item_id = props.match.params.ingredient_id;
    return (
        <div>
            <BasicItemDetail item_id={item_id} target='ingredient' />
            <BackButton/>
        </div>
    );
}