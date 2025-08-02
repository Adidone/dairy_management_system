const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');

//routes
const createUser = require("./routes/userRoutes/RouteUserCreation.js")
const loginUser = require("./routes/userRoutes/RouteUserLogin.js");
const createAdmin = require("./routes/adminRoutes/RouteAdminCreation.js");
const loginAdmin = require("./routes/adminRoutes/RouteAdminLogin.js");
const createEmp = require("./routes/empRoutes/RouteEmpCreate.js");
const loginEmp = require("./routes/empRoutes/RouteEmpLogin.js");
const milkCollection = require("./routes/milkRoutes/RouteMilkCollection.js")
const showUsers = require("./routes/userRoutes/RouteUsersShow.js")
const showAllCollection = require("./routes/milkRoutes/RouteMilkShow.js")
const showByDate = require("./routes/milkRoutes/RouteMilkShow.js");
const showByCust = require('./routes/milkRoutes/RouteMilkShow.js');
const showByEmp = require('./routes/milkRoutes/RouteMilkShow.js');
const deleteUser = require('./routes/deleteRoutes/RouteDelete.js')
const deleteEmp = require("./routes/deleteRoutes/RouteDelete.js")
const deleteCollection = require("./routes/deleteRoutes/RouteDelete.js")
const editCollection = require("./routes/editRoutes/RouteMilkEdit.js");

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
require("./models/Employe.js");
require("./models/MilkDetails.js")


app.get("/", (req, res) => {
    res.status(200).json({
        message: "response is getting"
    });
});

//routes
app.use("/user",createUser);
app.use("/user",loginUser);
app.use("/user",showUsers);

app.use("/admin",createAdmin);
app.use("/admin",loginAdmin);

app.use("/emp",createEmp);
app.use("/emp",loginEmp);

app.use("/milk",milkCollection);
app.use("/milk",showAllCollection)
app.use("/milk",showByDate);
app.use("/milk",showByCust);
app.use("/milk",showByEmp);

app.use("/delete",deleteUser);
app.use("/delete",deleteEmp);
app.use("/delete",deleteCollection);


app.use("/edit",editCollection);


app.listen(5555, () => {
    console.log("server is running on port 5555");
}); 