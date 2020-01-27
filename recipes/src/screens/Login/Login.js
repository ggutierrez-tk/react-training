import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import './Login.css';

export default () => {
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
