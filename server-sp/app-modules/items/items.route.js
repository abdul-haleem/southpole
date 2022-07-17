const express = require('express')
const router = express.Router();
const { listItems,getItemDetails,createItem,updateItem,deleteItem} = require('./items.api')
const { authorize, ADMIN, LOGGED_USER } = require('../../middleware/auth.middleware');


router.route('/').get(authorize(),listItems).post(authorize(ADMIN), createItem);
router.route('/:itemId').get(authorize(),getItemDetails).put(authorize(),updateItem).delete(authorize(ADMIN),deleteItem);

module.exports = router;