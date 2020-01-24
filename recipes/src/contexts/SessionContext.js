import React, {createContext, useState} from 'react';
import axios from 'axios';

export const SessionContext = createContext();

export function SessionContextProvider(props){
    const [token, setTokenState] = useState(
        window.localStorage.getItem('token')
        ?window.localStorage.getItem('token')
        :""
    );
    const setToken = (newtoken) => {
        window.localStorage.setItem('token', newtoken);
        setTokenState(newtoken);
    }
    const isLoggedIn = ()=> {
        return (token && token !== "");
    }

    const login = async (email, password) => {
        const endpoint = "http://localhost:8000/api/user/token/";
        const data = {'email': email, 'password': password};
        const res = await axios.post(endpoint, data);
        if (res.status === 200){
            setToken(res.data['token']);
        }
    }

    const values = {
        token,
        setToken,
        isLoggedIn,
        login,
    }
    return (
        <SessionContext.Provider value={values}>
            {props.children}
        </SessionContext.Provider>
    );

}
