import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listItems } from '../features/items/items.Slice'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import ItemForm from '../components/ItemForm'

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fromData, setFormData] = useState({
    search_name: '',
    pageNumber: 1,
    pageSize: 10,
  });

  const { search_name, pageNumber, pageSize } = fromData;

  const { authData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authData) {
      navigate('/login')
    }
  }, [authData, navigate])


  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const searchReq = {
      search_name,
    }
    dispatch(listItems({ pageNumber, pageSize }, searchReq))
  };

  const showItemForm = () =>{
    document.querySelector('#item_form').hidden = false;
    document.querySelector('#add_item_btn').hidden = true;
    document.querySelector('#search_section').hidden = true;
  }

  return (
    <>
    <section id="item_form" hidden>
      <ItemForm></ItemForm>
    </section>
      <section id="add_item_btn">
        <button className="btn btn-block" type="button" onClick={showItemForm}>Add Item</button>
      </section>
      <section id="search_section" className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Search Items'
              id='search_name' name='search_name' value={search_name} onChange={onChange} />
          </div>
          <button className="btn btn-block" type="button">Search</button>
        </form>
      </section>
      <section>

      </section>
    </>
  )
}

export default Dashboard