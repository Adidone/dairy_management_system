const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');

//routes
const createUser = require("./routes/userRoutes/RouteUserCreation.js")
const loginUser = require("./routes/userRoutes/RouteUserLogin.js");
const createAdmin = require("./routes/adminRoutes/RouteadminCreation.js");
const loginAdmin = require("./routes/adminRoutes/RouteadminLogin.js");
const createEmp = require("./routes/empRoutes/RouteEmpCreate.js");
const loginEmp = require("./routes/empRoutes/RouteEmpLogin.js");
const milkCollection = require("./routes/empRoutes/RouteMilkCollection.js")

const app = express();
app.use(cors());    
app.use(express.json());

mongoose.connect(process.env.mongo_connection, {})
    .then(() => {
        console.log("mongoose connected successfully");
    })
    .catch((err) => {
        console.log("mongoose failed =>", err);
    });     

//models
require("./models/User.js");


app.get("/", (req, res) => {
    res.status(200).json({
        message: "response is getting"
    });
});

//routes
app.use("/user",createUser);
app.use("/user",loginUser);

app.use("/admin",createAdmin);
app.use("/admin",loginAdmin);

app.use("/emp",createEmp);
app.use("/emp",loginEmp);
app.use("/emp",milkCollection);

app.listen(5555, () => {
    console.log("server is running on port 5555");
}); 