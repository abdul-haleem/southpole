const httpStatus = require('http-status')
const asyncHandler = require('express-async-handler')
const  Item = require('./Item.model')

// @desc Get List Of Items
// @route GET /api/v1/items
// @access Private
const listItems = asyncHandler(async (req,res) => {
    const items  = await Item.find();
    res.status(httpStatus.OK).json(items)
})

// @desc Get List Of Items
// @route POST /api/v1/items
// @access Private
const createItem = asyncHandler(async (req,res) => {
    const item = await Item.create(req.body);
    res.status(httpStatus.CREATED).json(item)
})

// @desc Get List Of Items
// @route GET /api/v1/items
// @access Private
const getItemDetails = asyncHandler(async (req,res) => {
    const theItem = await Item.findById(req.params.itemId)
    if (!theItem) {
        res.status(httpStatus.BAD_REQUEST)
        throw new Error(`Item ${req.params.itemId} not found`);
    }

    res.status(httpStatus.OK).json(theItem)
})

// @desc Get List Of Items
// @route PUT /api/v1/items
// @access Private
const updateItem = asyncHandler(async (req,res) => {  
    const theItem = await Item.findById(req.params.itemId)
    if (!theItem) {
        res.status(httpStatus.BAD_REQUEST)
        throw new Error(`Item ${req.params.itemId} not found`);
    }
    const updatedItem = await Item.findByIdAndUpdate(req.params.itemId, req.body, {create: true})

    res.status(httpStatus.OK).json(updatedItem)
})

// @desc Get List Of Items
// @route DELETE /api/v1/items
// @access Private
const deleteItem = asyncHandler(async (req,res) => {
    const theItem = await Item.findById(req.params.itemId)
    if (!theItem) {
        res.status(httpStatus.BAD_REQUEST)
        throw new Error(`Item ${req.params.itemId} not found`);
    }
    await Item.deleteOne(theItem)

    res.status(httpStatus.OK).json({message: `Item ${req.params.itemId} deleted successfully`})
})


module.exports = {
    listItems, getItemDetails, createItem,updateItem,deleteItem
}