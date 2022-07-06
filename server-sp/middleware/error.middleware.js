const httpStatus = require('http-status')

const handler = (err,req,res,next) => {
    const response = {
        code: err.status,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
        stackTrace: err.stack
    };

    if(process.env.NODE_ENV === 'production')
        delete response.stackTrace;

    res.status(err.status);
    res.json(response);
}

exports.handler = handler;