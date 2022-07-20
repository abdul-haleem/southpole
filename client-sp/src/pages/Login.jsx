import { useState, useEffect } from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { login,reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'


function Login() {
  const [fromData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password, } = fromData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


  useEffect(() => {
    console.log('inside userEffect')
    if (isError) {
      console.error(message)
    }
    if (isSuccess) {
      navigate('/')
    }
    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => { 
    e.preventDefault();
    const loginReq = {
      email,password
    }
    dispatch(login(loginReq))
  };

  if (isLoading) {
    return <Spinner />
  }
   return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt /> Sign In</h1>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit} >
          <div className='form-group'>
          <input type='email' className='form-control' placeholder='Email'
            id='email' name='email' value={email} onChange={onChange} />
          </div>
          <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'
            id='password' name='password' value={password} onChange={onChange} />
          </div>
          <div className='form-group'>
          <button type='submit' className='btn btn-block'>Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login