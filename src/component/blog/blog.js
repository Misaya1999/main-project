import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api";

function Blog() {

    const [blog, setBlog] = useState ([]);

    useEffect(() => {
        API.get('/blog')
        .then(response => {
            setBlog(response.data.blog.data)
        })
        .catch(function (error) {
            console.log(error)
        })
    }, [])

    return (
        <div className="blog-post-area">
            <h2 className="title text-center">Latest From our Blog</h2>
            
            {blog.map((item) => (
                <div className="single-blog-post" key={item.id}>
                    <h3>{item.title}</h3>
                    <div className="post-meta">
                        <ul>
                            <li><i className="fa fa-user"></i> Author {item.id_auth}</li>
                            <li>
                                <i className="fa fa-clock-o"></i>
                                {new Date(item.updated_at).toLocaleTimeString()}
                            </li>
                            <li>
                                <i className="fa fa-calendar"></i>
                                {new Date(item.updated_at).toLocaleDateString()}
                            </li>
                        </ul>
                    </div>
                    <a><img src={"http://localhost/laravel8/public/upload/blog/image/" + item.image} alt="" /></a>
                    <p>{item.description}</p>
                    <Link className="btn btn-primary" to={`/blog/detail/${item.id}`}>Read More</Link>
                </div>

            ))}

        </div>
    );
}

export default Blog;
