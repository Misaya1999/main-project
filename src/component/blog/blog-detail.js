import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import API from "../../api";

function BlogDetail(){
    let params = useParams();

    const [data, setData] = useState({});
    const [comment, setComment] = useState([]);
    const [idRely, setIdRely] = useState('');
    
    useEffect(() => {
        API.get('/blog/detail/' + params.id)
        .then(response => {
            setData(response.data.data)
            setComment(response.data.data.comment)
        })
        .catch(function (error) {
            console.log(error)
        })
    }, [])

    return (
        <div className="blog-post-area">
            <div className="single-blog-post">
                <h2>{data.title}</h2>
                <div className="post-meta">
                    <ul>
                        <li><i className="fa fa-user"></i> Author {data.id_auth}</li>
                        <li>
                            <i className="fa fa-clock-o"></i>
                            {new Date(data.updated_at).toLocaleTimeString()}
                        </li>
                        <li>
                            <i className="fa fa-calendar"></i>
                            {new Date(data.updated_at).toLocaleDateString()}
                        </li>
                    </ul>
                </div>
                <a><img src={"http://localhost/laravel8/public/upload/blog/image/" + data.image} alt="" /></a>
                
                {/* Các kí tự trong Content đang ở dạng Encode để tránh lỗi hoặc bảo mật, phải Decode bằng cách: */}
                <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                
                {comment.map((item, index) => (
                    <p key={index}>{item.comment}</p>
                ))}
            </div>
        </div>
    )
}

export default BlogDetail;

