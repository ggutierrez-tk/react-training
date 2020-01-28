import React from 'react';
import BasicItemDetail from '../../components/BasicItemDetail';

export default (props) => {
    const item_id = props.match.params.tag_id;
    return (<BasicItemDetail item_id={item_id} target='tags' />);
}