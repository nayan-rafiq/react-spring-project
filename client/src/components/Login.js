import "./Login.css"
import { postData } from '../apiService'
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username, password
    }
    postData('/auth/login', payload, onLoginSuccess)
  }

  const onLoginSuccess = (loginResponse) => {
    localStorage.setItem('token', loginResponse.token)
    window.location.href = '/'
  }

  return (
    <main className='form-signin w-100 m-auto mt-5'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='usernameInput'
            placeholder='yourusername'
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='usernameInput'>Username</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            required
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
      </form>
    </main>
  )
}

export default Login
