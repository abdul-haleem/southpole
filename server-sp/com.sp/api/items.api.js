const httpStatus = require('http-status')
const asyncHandler = require('express-async-handler')

// @desc Get List Of Items
// @route GET /api/v1/items
// @access Private
const listItems = asyncHandler(async (req,res) => {
    res.status(httpStatus.OK).json({ message: 'list lots of items'})
})

// @desc Get List Of Items
// @route POST /api/v1/items
// @access Private
const createItem = asyncHandler(async (req,res) => {
    console.log(req.body);
    res.status(httpStatus.CREATED).json({ message: 'create and item'})
})

// @desc Get List Of Items
// @route GET /api/v1/items
// @access Private
const getItemDetails = asyncHandler(async (req,res) => {
    res.status(httpStatus.OK).json({ message: `get details of item ${req.params.itemId}`})
})

// @desc Get List Of Items
// @route PUT /api/v1/items
// @access Private
const updateItem = asyncHandler(async (req,res) => {  
    res.status(httpStatus.OK).json({ message: `update item ${req.params.itemId}`})
})

// @desc Get List Of Items
// @route DELETE /api/v1/items
// @access Private
const deleteItem = asyncHandler(async (req,res) => {
    res.status(httpStatus.OK).json({ message:  `delete item ${req.params.itemId}`})
})


module.exports = {
    listItems, getItemDetails, createItem,updateItem,deleteItem
}