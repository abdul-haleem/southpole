import httpStatus from 'http-status';
import axios from 'axios'

const ITEMS_URL = '/items';

const listItems = async (pageData) => {
    const response = await axios.get(ITEMS_URL, pageData);
    return response.data;
}

const itemsService  = {
    listItems,
}
export default itemsService;

