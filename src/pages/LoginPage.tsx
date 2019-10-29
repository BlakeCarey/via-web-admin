import React, { Component } from 'react';
import ViewWrapper from 'components/Shared/Wrappers/ViewWrapper';
import CenterWrapper from 'components/Shared/Wrappers/CenterWrapper';

// containers
import Login from 'containers/Login';

class LoginPage extends Component<{}> {
    
    private submitHandler = async (values: any): Promise<any> => {
        console.log(values);
        return null;
    };

    render() {
        return (
            <ViewWrapper>
                <CenterWrapper>
                    <Login submit={this.submitHandler} />
                </CenterWrapper>
            </ViewWrapper>
        );
    }
}

export default LoginPage;
