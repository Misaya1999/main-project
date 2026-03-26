import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../api"

function Comment({ blogId, comments, setComments, setIdReply }) {

    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const isLogin = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("auth") || "{}")

    function handleSubmit(e){
        e.preventDefault()

        //check login
        if(!isLogin){
            alert ("Vui lòng đăng nhập để comment")
            navigate("/member/login-register")
            return
        }

        //check comment rỗng
        if(message.trim() === ""){
            setError("Vui lòng nhập comment")
            return
        }

        setError("")

        const data = {
            id_blog: blogId,
            id_user: user.id,
            id_comment: 0, 
            comment: message
        }

        const token = localStorage.getItem("token")

        API.post("blog/comment", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(res => {

            if(res.data.errors){
                setError("Lỗi từ server")
            } else {
                //thêm comment mới vào list (không reload)
                setComments(prev => [
                    ...prev,
                    {
                        ...data,
                        name: user.name
                    }
                ])

                setMessage("")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            {/* LIST COMMENT */}
            {comments.map((item, index) => (
                <p key={index}>
                    <b>{item.name || "User"}:</b> {item.comment}
                </p>
            ))}
     
           <div className="replay-box">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Leave a reply</h2>
                        <div className="text-area">
                            <div className="blank-arrow">

                                <label>{user.name ?? "User"}</label>
                                <textarea name="message" rows={11} value={message}onChange={(e) => setMessage(e.target.value)} placeholder="Nhập comment" />
                                <button onClick={handleSubmit} className="btn btn-default">Post comment</button>
                                <p style={{color:"red"}}>{error}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment