import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import API from "https://localhost/laravel/public/api/";

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
}

export default BlogDetail;

