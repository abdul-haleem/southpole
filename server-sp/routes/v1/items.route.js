const express = require('express')
const router = express.Router();
const { listItems,getItemDetails,createItem,updateItem,deleteItem} = require('../../api/items.api')


router.route('/').get(listItems).post(createItem);
router.route('/:itemId').get(getItemDetails).put(updateItem).delete(deleteItem);


module.exports = router;