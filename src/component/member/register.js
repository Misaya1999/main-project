import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        avatar: "",
        level: 0
    })

    const [errors, setErrors] = useState({})
    const [file, setFile] = useState("")

    function handleInput(e){
        const name = e.target.name
        const value = e.target.value

        setInputs(state => ({
            ...state,
            [name]: value
        }))
    }

    function handleFile(e){
z
        const fileUpload = e.target.files[0]

        if(fileUpload){
            
            // check type
            if(!fileUpload.type.includes("image")){
                alert("File phải là hình ảnh")
                return
            }

            // check size < 1MB
            if(fileUpload.size > 1024 * 1024){
                alert("File phải nhỏ hơn 1MB")
                return
            }

            setFile(fileUpload)

            let reader = new FileReader()

            reader.onload = function(e){
                setInputs(state => ({
                    ...state,
                    avatar: e.target.result
                }))
            }

            reader.readAsDataURL(fileUpload)
        }
    }

    function checkForm(e){
        e.preventDefault()

        let errorSubmit = {}

        if(inputs.name === ""){
            errorSubmit.name = "Vui lòng nhập username"
        }

        if(inputs.email === ""){
            errorSubmit.email = "Vui lòng nhập email"
        }

        if(inputs.password === ""){
            errorSubmit.password = "Vui lòng nhập password"
        }

        if(inputs.phone === ""){
            errorSubmit.phone = "Vui lòng nhập phone"
        }

        if(inputs.address === ""){
            errorSubmit.address = "Vui lòng nhập address"
        }

        if(inputs.avatar === ""){
            errorSubmit.avatar = "Vui lòng chọn avatar"
        }

        if(Object.keys(errorSubmit).length > 0){
            setErrors(errorSubmit)
        }else{
            alert("Đăng ký thành công")
        }
    }

    return (
        <div className="Login">
            <section id="form">
                <div className="container">
                    <div className="row"> 
                        <div className="col-sm-4">
                            <div className="signup-form">
                                <h2>New User Signup!</h2>
                                <form onSubmit={checkForm}>
                                    <input type="text" name="name" onChange={handleInput} />
                                    <p>{errors.name}</p>

                                    <input type="email" name="email" onChange={handleInput} />
                                    <p>{errors.email}</p>

                                    <input type="password" name="password" onChange={handleInput} />
                                    <p>{errors.password}</p>

                                    <input type="text" name="phone" onChange={handleInput} />
                                    <p>{errors.phone}</p>

                                    <input type="text" name="address" onChange={handleInput} />
                                    <p>{errors.address}</p>

                                    <input type="file" name="avatar" onChange={handleFile} />
                                    <p>{errors.avatar}</p>

                                    <button type="submit" className="btn btn-default">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
