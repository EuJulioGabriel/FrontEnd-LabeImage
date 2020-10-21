import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { CardSearch } from './StylePageSearch'

function CardPageSearch(props) {
    const history = useHistory()
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(props.users)
    }, [props.users])

    const goToProfileUser = (user) => {
        history.push("/profile/" + user.id, user)
    } 
    
    return (
        <div>
            {users.map((user) => {
                return (
                    <CardSearch key={user.id} onClick={() => goToProfileUser(user)}>
                        <h2>Nome: {user.name}</h2>
                        <p>Nickname: {user.nickname}</p>
                    </CardSearch>
                )
            })}
        </div>
    )
}

export default CardPageSearch