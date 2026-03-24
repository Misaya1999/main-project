import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../../api";

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
            const data = {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                phone: inputs.phone,
                address: inputs.address,
                avatar: inputs.avatar,
                level: 0
            }
            console.log("User data", data)

            API.post("register", data)
            .then(res => {

                console.log("RESPONSE:", res)

                if(res.data.errors){
                    setErrors(res.data.errors)
                } else {
                    alert("Đăng ký thành công")
                }

            })
            .catch(err => console.log("ERROR:", err))
        }
    }

    return (
        <div className="signup-form">
            <h2>New User Signup!</h2>
            <form onSubmit={checkForm}>
                <input type="text" name="name" placeholder="User Name" onChange={handleInput} />
                <p style={{color:"red"}}>{errors.name}</p>

                <input type="email" name="email" placeholder="Email Address" onChange={handleInput} />
                <p style={{color:"red"}}>{errors.email}</p>

                <input type="password" name="password"placeholder="Password" onChange={handleInput} />
                <p style={{color:"red"}}>{errors.password}</p>

                <input type="text" name="phone"placeholder="Phone" onChange={handleInput} />
                <p style={{color:"red"}}>{errors.phone}</p>

                <input type="text" name="address"placeholder="Address" onChange={handleInput} />
                <p style={{color:"red"}}>{errors.address}</p>

                <input type="file" name="avatar" onChange={handleFile} />
                <p style={{color:"red"}}>{errors.avatar}</p>

                <button type="submit" className="btn btn-default">Signup</button>
            </form>
        </div>
    );
}

export default Register;
