import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Rating } from "react-simple-star-rating"
import API from "../../api"

function Rate({ blogId }) {

    const navigate = useNavigate()
    const [rating, setRating] = useState(0)
    const [avgRating, setAvgRating] = useState(0)

    const isLogin = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("auth") || "{}")


    useEffect(() => {
        API.get(`/blog/rate/${blogId}`)
        .then(res => {

            if(res.data.data){

                let rates = res.data.data

                let sum = 0
                rates.forEach(item => {
                    sum += item.rate
                })

                let avg = rates.length ? sum / rates.length : 0

                setAvgRating(avg)
                setRating(avg) // hiển thị sao
            }
        })
    }, [blogId])


    // HANDLE CLICK RATE
    const handleRating = (rate) => {

        let user = JSON.parse(localStorage.getItem("auth") || "{}")
        let token = localStorage.getItem("token")

        if(!isLogin){
            alert ("Vui lòng đăng nhập để đánh giá")
            navigate("/member/login-register")
            return
        }

        let data = {
            user_id: user.id,
            blog_id: blogId,
            rate: rate / 20 // vì lib trả 20,40,60...
        }

        API.post(`/blog/rate/${blogId}`, data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(res => {
            console.log(res.data)
        })

        setRating(rate)
    }

    return (
        <div>
            <Rating
                onClick={handleRating}
                initialValue={rating}
                size={25}
                transition
                fillColor="gold"
                emptyColor="gray"
            />

            <p>⭐ Trung bình: {avgRating.toFixed(1)} / 5</p>
        </div>
    )
}

export default Rate