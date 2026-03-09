import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <div className="col-sm-4 col-sm-offset-4">
                <div className="login-form">
                    <h2>Login to your account</h2>
                    <form action="#">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email Address" />
                        <span>
                            <input type="checkbox" className="checkbox" /> 
                            Keep me signed in
                        </span>
                        <div className="button-group" style={{display: 'flex', gap: '10px'}}>
                            <button type="submit" className="btn btn-default">Login</button>
                            <button type="button" class="btn btn-default" onclick='/register'>Register</button>
                            <button type="button" class="btn btn-default" onclick='#'>Forgot Password ?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
