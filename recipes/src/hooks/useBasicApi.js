import React, {createContext, useContext} from 'react';
import axios from 'axios';

import useFetchedElements from './useFetchedElements'
import { SessionContext } from './SessionContext';

export function useBasicApi(endpoint){
    const {token} = useContext(SessionContext);
    const authheaders = {'Authorization': `Token ${token}`};

    const retrieve = async  () => {
        const res = await axios.get(endpoint, {'headers': authheaders})
        return res;
    }
    const [Elements, addLocalElement, refresh] = useFetchedElements(retrieve);

    const addElement = async (data) => {
        const authheaders = {'Authorization': `Token ${token}`};
        const res = await axios.post(endpoint, data, {'headers':authheaders});
        if (res.status===201){
            addLocalElement(res.data);
        }    
    };

    return [
        Elements,
        addElement,
        refresh
    ]

}
