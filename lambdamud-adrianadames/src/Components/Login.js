import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledSpan = styled.span`
    font-weight: bold;
`;

const StyledDemoCredentialsDiv = styled.div`
    border: 1px solid black;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoCredentials: false
        };
    }

    toggleDemoCredentials = e => {
        e.preventDefault();
        this.setState((prevState => ({
            demoCredentials:!prevState.demoCredentials
          })))
    }

    render() {
        return (
            <div style = {{background:'white', width:'300px', padding:'20px'}}>
                <h1>LambdaMUD Game</h1>
                <br/> 
                <form onSubmit = {this.props.loginSubmitHandler}>
                    <div>
                        username: 
                        <input
                            type = 'text'
                            name = 'loginUsername'
                            value = {this.props.loginUsername} 
                            onChange = {this.props.inputChangeHandler}
                        />
                    </div>
                    <div>
                        password:
                        <input
                            type = 'password'
                            name = 'loginPassword'
                            value = {this.props.loginPassword} 
                            onChange = {this.props.inputChangeHandler}
                        />
                    </div>
                    <br/>
                    <div>
                        <button type = 'submit'>Login</button>
                    </div>
                    <br/>
                </form>
                {this.props.errorMessage
                        ?
                        <div style={{ marginBottom: '20px', color: 'red', height: '20px' }}>
                            {this.props.errorMessage}
                        </div>
                        : null
                    }
                <div>
                    Don't have an account? <Link to = "/register">Register </Link>  
                    or click <StyledSpan onClick = {this.toggleDemoCredentials}>here</StyledSpan> for demo credentials.
                </div>
                <br/>
                    {this.state.demoCredentials
                        ?
                        <StyledDemoCredentialsDiv>
                            <span>Demo Credentials</span>
                            <br/>
                            <br/>
                            username: adrian123
                            <br/>
                            password: adames123
                        </StyledDemoCredentialsDiv>
                        :
                        null
                    }
                
            </div>
        )
    }
}
// const Login = props => {
//     return (
//         <div style = {{background:'white', width:'300px', padding:'20px'}}>
//             <h1>LambdaMUD Game</h1>
//             <br/> 
//             <form onSubmit = {props.loginSubmitHandler}>
//                 <div>
//                     username: 
//                     <input
//                         type = 'text'
//                         name = 'loginUsername'
//                         value = {props.loginUsername} 
//                         onChange = {props.inputChangeHandler}
//                     />
//                 </div>
//                 <div>
//                     password:
//                     <input
//                         type = 'password'
//                         name = 'loginPassword'
//                         value = {props.loginPassword} 
//                         onChange = {props.inputChangeHandler}
//                     />
//                 </div>
//                 <br/>
//                 <div>
//                     <button type = 'submit'>Login</button>
//                 </div>
//                 <br/>
//             </form>
//             {props.errorMessage
//                     ?
//                     <div style={{ marginBottom: '20px', color: 'red', height: '20px' }}>
//                         {props.errorMessage}
//                     </div>
//                     : null
//                 }
//             <div>
//                 Don't have an account? <Link to = "/register">Register </Link>  
//                 or click <StyledSpan onClick = {this.toggleDemoCredentials}>here</StyledSpan> for demo credentials.
//             </div>
//             <br/>
//                 {this.state.demoCredentials
//                     ?
//                     <StyledDemoCredentialsDiv>
//                         <span>Demo Credentials</span>
//                         <br/>
//                         <br/>
//                         username: adrian123
//                         password: adames123
//                     </StyledDemoCredentialsDiv>
//                     :
//                     null
//                 }
            
//         </div>
//     )
// }


export default Login
