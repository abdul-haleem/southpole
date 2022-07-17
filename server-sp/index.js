const app = require('./cfg/express.js')
const dotenv = require('dotenv').config()
const port = process.env.PORT;

app.use("/api/v1/items", require('./app-modules/items/items.route'));

app.use("/api/v1/users", require('./app-modules/users/user.routes'));

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});