import React from 'react';
import './Login.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


function Login(){
    
    return (
        <div className="LoginPage">
            <div>
                <Tabs defaultActiveKey="login-tab" id="loginpage-tabs">
                    <Tab eventKey="login-tab" title="login">
                        <LoginForm />
                    </Tab>
                    <Tab eventKey="signup-tab" title="signup">
                        <SignUpForm />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Login;