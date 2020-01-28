import React, {useContext} from 'react';
import useInputState from '../../hooks/useInputState';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {SessionContext} from '../../contexts/SessionContext';

export default () => {
    const {setToken} = useContext(SessionContext);
    const [mail, mailHandleChange, ] = useInputState("");
    const [pass, passHandleChange, /*passReset*/] = useInputState("");
    const history=useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = "http://localhost:8000/api/user/token/"
        const data = {'email':mail, 'password': pass};
        const res = await axios.post(endpoint, data);
        if (res.status===200){
            setToken(res.data['token']);
            //mailReset();
            //passReset();
            history.push("/");
        }
        
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
            <table><tbody>
                <tr>
                    <td>mail address: </td><td><input value={mail} label="mail address" onChange={mailHandleChange} /></td>
                </tr>
                <tr>
                    <td>password:</td><td><input type="password" value={pass} label="password" onChange={passHandleChange} /></td>
                </tr>
                
            </tbody></table>
            <button> log-in</button>
            </form>
        </div>
    );
}
