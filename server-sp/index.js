const app = require('./cfg/express.js')
const dotenv = require('dotenv').config()
const port = process.env.PORT;

app.use("/api/v1/items", require('./routes/v1/items.route'));

app.use("/api/v1/users", require('./routes/v1/user.routes'));

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});