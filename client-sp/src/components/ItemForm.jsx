import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function ItemForm() {

    const [fromData, setFormData] = useState({
        name: '',
        description: '',
        basePrice: '',
    });

    const { name, description, basePrice, } = fromData;


    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <section className='form'>
                <h3>Add New Item</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className='form-control' id="name" name="name" value={name} onChange={onChange} placeholder='Item Name' required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-control' id="description" name="description" value={description} onChange={onChange} placeholder='Description' required/>
                    </div>
                    <div className="form-group">
                        <input type="number" className='form-control' name="basePrice" id="basePrice" value={basePrice} onChange={onChange} placeholder='Item Price'required/>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-block' type='submit'>Save</button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default ItemForm