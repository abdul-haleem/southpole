import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {

  const [fromData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: ''
  });

  const { fullName, email, password, passwordConfirm, role } = fromData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      console.error(message)
    }
    if (isSuccess || user) {
      navigate('/login')
    }

  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.error('password do not match')
    } else {
      const userData = {
        fullName, email, password, role
      }
      dispatch(registerUser(userData));
    }
  };


  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        <h1><FaUser /> Register</h1>
        <p>Register an Account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='Email'
              id='email' name='email' value={email} onChange={onChange} required/>
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Full Name'
              id='fullName' name='fullName' value={fullName} onChange={onChange} required/>
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Role'
              id='role' name='role' value={role} onChange={onChange} />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' placeholder='Password'
              id='password' name='password' value={password} onChange={onChange} required/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' placeholder='Confirm Password'
              id='passwordConfirm' name='passwordConfirm' value={passwordConfirm} onChange={onChange} required/>
          </div>
          <div className='form-group'>
          <button type='submit' className='btn btn-block' >Submit</button>
        </div>
        </form>
      </section>


    </>
  )
}

export default Register