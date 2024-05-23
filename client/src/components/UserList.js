import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import moment from "moment"
import { getData } from "../apiService"

function UserList() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getData("/users", (data) => setUsers(data))
  }, [])

  return (
    <div>
      <div>
        <Link to='/users/add' className='btn btn-primary'>
          Add new user
        </Link>
      </div>

      <table className='table table-striped mt-4'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Designation</th>
            <th scope='col'>Joining date</th>
            <th scope='col'>Leave Allocation</th>
            <th scope='col'>Leave Applications</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <th scope='row'>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>{moment(user.joinedAt).format("MMMM Do YYYY")}</td>
                <td>
                  <Link to={`/users/${user.id}/leaves/alloted`}>
                    Allotted leaves
                  </Link>
                </td>
                <td>
                  <Link to={`/users/${user.id}/leaves/applied`}>
                    Leave Applications
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
