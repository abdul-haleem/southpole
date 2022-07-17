import { useState, useEffect } from 'react'
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [fromData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password, } = fromData;

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => { e.preventDefault()};
   return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt /> Sign In</h1>
      </section>
      <section className='form'>
        <form>
          <div className='form-group'>
          <input type='email' className='form-control' placeholder='Email'
            id='email' name='email' value={email} onChange={onChange} />
          </div>
          <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'
            id='password' name='password' value={password} onChange={onChange} />
          </div>
        </form>
        <div className='form-group'>
          <input type='submit' className='form-control' value='Login' onSubmit={onSubmit} />
          </div>
      </section>
    </>
  )
}

export default Login