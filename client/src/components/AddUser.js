import { useState } from 'react';
import { postData } from '../apiService';
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [joinedAt, setJoinedAt] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      "name": name,
      "designation": designation,
      "joiningDate": joinedAt,
      "username": username,
      "password": password
    }
    postData('users', payload, function() {
      navigate("/users");
    })
  }

  return (
    <div>
      <h2>Add User</h2>
      <div className='col-md-6'>
      
      <form className="row g-3 mt-4" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input value={name} type="text" className="form-control" id="nameInput" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="designationInput" className="form-label">Designation</label>
          <input value={designation} type="text" className="form-control" id="designationInput" onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="joiningDateInput" className="form-label">Joining date</label>
          <input value={joinedAt} type="date" className="form-control" id="joiningDateInput" onChange={(e) => setJoinedAt(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="usernameInput" className="form-label">Username</label>
          <input value={username} type="text" className="form-control" id="usernameInput" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="passowrdInput" className="form-label">Password</label>
          <input value={password} type="text" className="form-control" id="passowrdInput" onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default AddUser