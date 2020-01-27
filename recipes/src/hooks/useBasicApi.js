import {useContext, useState} from 'react';
import axios from 'axios';
import _ from 'lodash';

import { SessionContext } from '../contexts/SessionContext';

export default function useBasicApi(endpoint, testFunction=null){
    
    const {token} = useContext(SessionContext);
    const authheaders = {'Authorization': `Token ${token}`};
    const [elements, setElements] = useState([]);
    const addLocalElement = (element) => {
        setElements(previousElements => [element, ...previousElements]);
    }

    const addRemoteElement =  async ( element) => {
        const res = await axios.post(endpoint, element, { 'headers': authheaders });
        return res.status === 201 ? res.data : undefined;
    }

    testFunction = (testFunction) ? testFunction: res => (res.status <400);
    
    const retrieve = async  () => {
        const res = await axios.get(endpoint, {'headers': authheaders})
        return res;
    }

    const refresh = async () => {
        let res = await retrieve();
        setElements(
            testFunction(res)? res.data : []
        );
    }
    
    const addElement = async (data) => {
        let retVal = elements.find(item=>_.isMatch(item, data))
        if (retVal === undefined) {
            retVal = await addRemoteElement(data);
            addLocalElement(retVal);
        }
        return retVal;
    };

    return [ elements, addElement, refresh ]

}
