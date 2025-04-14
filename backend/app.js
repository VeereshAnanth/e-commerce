const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
const categoryRoutes = require("./routes/category")

app.use(express.json());

app.get('/', (req,res) => {
    res.send("server running");
})

app.use("/category", categoryRoutes);

async function connectDb (){
await mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "e-comm-store-db"

});
console.log("mongodb connected")
}
connectDb().catch((err) => {
    console.error(err)
})

app.listen(port,() => {
    console.log("server running on port", port)
})