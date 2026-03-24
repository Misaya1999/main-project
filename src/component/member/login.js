import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import API from "../../api"

function Login() {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    function handleInput(e){
        const name = e.target.name
        const value = e.target.value

        setInputs(state => ({
            ...state,
            [name]: value
        }))
    }

    // check login
    function handleSubmit(e){
        e.preventDefault()

        let errorSubmit = {}
        let flag = true

        if(inputs.email === ""){
            errorSubmit.email = "Vui lòng nhập email"
            flag = false
        }

        if(inputs.password === ""){
            errorSubmit.password = "Vui lòng nhập password"
            flag = false
        }

        if(!flag){
            setErrors(errorSubmit)
        } else {

            const data = {
                email: inputs.email,
                password: inputs.password,
                level: 0
            }

            API.post("login", data)
            .then(res => {

                if(res.data.errors){
                    setErrors(res.data.errors)
                } else {

                    // lưu token + user
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("auth", JSON.stringify(res.data.auth))

                    // chuyển trang
                    navigate("/")
                }

            })
            .catch(err => console.log(err))
        }
    }

    // nếu đã login thì về home
    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate("/")
        }
    }, [])

    return (
        <div className="Login">
            <div className="col-sm-4 col-sm-offset-4">
                <div className="login-form">
                    <h2>Login to your account</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <input type="email" name="email" placeholder="Email Address" onChange={handleInput}/>
                        <p style={{color:"red"}}>{errors.email}</p>
                        <input type="password" name="password"placeholder="Password"onChange={handleInput}/>
                        <p style={{color:"red"}}>{errors.password}</p>
                        
                        <span>
                            <input type="checkbox" className="checkbox" /> 
                            Keep me signed in
                        </span>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <button type="submit" className="btn btn-default">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
