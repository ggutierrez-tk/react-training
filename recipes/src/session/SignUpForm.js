import React, {useContext} from 'react';
import useInputState from '../hooks/useInputState';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {SessionContext} from '../contexts/SessionContext';

function SignUpForm(props){
    //TODO: put this in a config file instead
    const endpoint = "http://localhost:8000/api/user/create/";
    
    const [name, nameHandleChange, nameReset] = useInputState("");
    const [mail, mailHandleChange, mailReset] = useInputState("");
    const [pass, passHandleChange, passReset] = useInputState("");
    const [passConfirm, passConfirmHandleChange, passConfirmReset] = useInputState("");
    const history=useHistory();
    const {login} = useContext(SessionContext);
    const handleSubmit = async (event) => {
        event.preventDefault();
        //TODO: perform some validation
        let data ={'name': name, 'email': mail, 'password': pass};
        const res = await axios.post(endpoint, data);
        if (res.status===201){
            nameReset();
            mailReset();
            passReset();
            passConfirmReset();
            login(mail, pass);
            history.push("/");
        }
        
    };
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <table><tbody>
            <tr>
              <td>name: </td>
              <td><input value={name} label="name" onChange={nameHandleChange}/></td>
            </tr>
            <tr>
              <td>mail address: </td>
              <td><input value={mail} label="mail address" onChange={mailHandleChange}/></td>
            </tr>
            <tr>
              <td>password:</td>
              <td><input type="password" value={pass} label="password" onChange={passHandleChange}/></td>
            </tr>
            <tr>
              <td>confirm password:</td>
              <td><input type="password" value={passConfirm} label="password" onChange={passConfirmHandleChange}/></td>
            </tr>
          </tbody></table>
          <button>Sign up</button>
        </form>
      </div>
    );
}

export default SignUpForm;