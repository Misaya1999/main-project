

function Index(){
    
    return(
        <>
        <section id="form">          
            <div className="col-sm-4 col-sm-offset-2">
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
                            <button type="button" class="btn btn-default" onclick='#'>Forgot Password ?</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-1">
                <h2 className="or">OR</h2>
            </div>
            <div className="col-sm-4">
                <div className="signup-form">
                    <h2>New User Signup!</h2>
                    <form action="#">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Phone" />
                        <input type="text" placeholder="Address" />
                        <input type="file" />
                        <button type="submit" className="btn btn-default">Register</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Index;