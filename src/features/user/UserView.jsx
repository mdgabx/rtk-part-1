import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
    const user = useSelector((state) => state.user)
    console.log('user', user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? (<div>Error: { user.error }</div>) : null}
        <div>
            {
                user.user.map((u) => {
                    return (
                        <p key={u.id}>{u.name}</p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UserView