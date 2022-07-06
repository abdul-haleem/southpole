const app = require('./cfg/express.js')
const dotenv = require('dotenv').config()
const port = process.env.PORT;

app.use("/api/v1/items", require('./com.sp/routes/v1/items.route'))

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});