import { Link } from 'react-router-dom'

function UserList() {
  return (
    <div>
      <div>
        <Link to="/users/add" className='btn btn-primary'>Add new user</Link>
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
          <tr>
            <th scope='row'>1</th>
            <td>Md Monsur Ali</td>
            <td>Senior Officer</td>
            <td>12/10/2024</td>
            <td><Link to={"/users/100/leaves/alloted"}>Allotted leaves</Link></td>
            <td><Link to={"/users/100/leaves/applied"}>Leave Applications</Link></td>
          </tr>
          <tr>
            <th scope='row'>1</th>
            <td>Md Monsur Ali</td>
            <td>Senior Officer</td>
            <td>12/10/2024</td>
            <td><Link to={"/users/100/leaves/alloted"}>Allotted leaves</Link></td>
            <td><Link to={"/users/100/leaves/applied"}>Leave Applications</Link></td>
          </tr>
          <tr>
            <th scope='row'>1</th>
            <td>Md Monsur Ali</td>
            <td>Senior Officer</td>
            <td>12/10/2024</td>
            <td><Link to={"/users/100/leaves/alloted"}>Allotted leaves</Link></td>
            <td><Link to={"/users/100/leaves/applied"}>Leave Applications</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserList