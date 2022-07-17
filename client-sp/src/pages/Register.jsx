import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
function Register() {

  const [fromData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: ''
  });

  const { fullName, email, password, passwordConfirm, role } = fromData;

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
        <h1><FaUser /> Register</h1>
        <p>Register an Account</p>
      </section>
      <section className='form'>
        <form>
          <div className='form-group'>
          <input type='email' className='form-control' placeholder='Email'
            id='email' name='email' value={email} onChange={onChange} />
          </div>
          <div className='form-group'>
          <input type='text' className='form-control' placeholder='Full Name'
            id='fullName' name='fullName' value={fullName} onChange={onChange} />
          </div>
          <div className='form-group'>
          <input type='text' className='form-control' placeholder='Role'
            id='role' name='role' value={role} onChange={onChange} />
          </div>
          <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'
            id='password' name='password' value={password} onChange={onChange} />
          </div>
          <div className='form-group'>
          <input type='password' className='form-control' placeholder='Confirm Password'
            id='passwordConfirm' name='passwordConfirm' value={passwordConfirm} onChange={onChange} />
          </div>
        </form>
        <div className='form-group'>
          <input type='submit' className='form-control' onSubmit={onSubmit} />
          </div>
      </section>


    </>
  )
}

export default Register