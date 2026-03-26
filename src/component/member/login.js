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
        let xx = true

        if(inputs.email === ""){
            errorSubmit.email = "Vui lòng nhập email"
            xx = false
        }

        if(inputs.password === ""){
            errorSubmit.password = "Vui lòng nhập password"
            xx = false
        }

        if(!xx){
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

                    console.log("LOGIN RESPONSE:", res.data)

                    // lưu token + user
                    if(res.data.token && res.data.Auth){
                        localStorage.setItem("token", res.data.token)
                        localStorage.setItem("auth", JSON.stringify(res.data.Auth))
                    

                    // chuyển trang
                    navigate("/")
                    } 
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
    );
}

export default Login;
