import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUser(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setUser('데이터를 가져오지 못했습니다')
                setLoading(false)
            })
    })


    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default UserList