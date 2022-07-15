const httpStatus = require('http-status')
const moment = require('moment-timezone');
const { omit } = require('lodash');
const asyncHandler = require('express-async-handler')
const  User = require('../models/User.model')
const  RefreshToken = require('../models/RefreshToken.model')
const {jwtExpirationInterval } = require('../cfg/vars')
/**
 * Create new user
 * @public
 */
 const createUser = asyncHandler( async (req, res, next) => {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(httpStatus.CREATED);
      res.json(savedUser.transform());
    } catch (error) {
      next(User.checkDuplicateEmail(error));
    }
  });

const getProfile = asyncHandler(async (req,res,next) => {
  res.json({ message: "User Profile"});
});
   

const listUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.list(req.query);
    const transformedUsers = users.map((user) => user.transform());
    res.json(transformedUsers);
  } catch (error) {
    next(error);
  }
});

const login = asyncHandler(async (req, res, next) => {
    try {
      const { user, accessToken } = await User.findAndGenerateToken(req.body);
      const token = generateTokenResponse(user, accessToken);
      const userTransformed = user.transform();
      return res.json({ token, user: userTransformed });
    } catch (error) {
      return next(error);
    }
  });


function generateTokenResponse(user, accessToken) {
    const tokenType = 'Bearer';
    const refreshToken = RefreshToken.generate(user).token;
    const expiresIn = moment().add(jwtExpirationInterval, 'minutes');
    return {
      tokenType,
      accessToken,
      refreshToken,
      expiresIn,
    };
  }

module.exports = {createUser,getProfile, login, listUsers};