import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import API from "../../api";

function BlogDetail(){
    let params = useParams();

    const [data, setData] = useState('');
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
        <div>
            <h2>Blog Detail</h2>

            <h3>{data?.title}</h3>
            <p>{data?.description}</p>

            <h4>Comments</h4>

            {comment.map((item, index) => (
                <p key={index}>{item.comment}</p>
            ))}
        </div>
    )
}

export default BlogDetail;

