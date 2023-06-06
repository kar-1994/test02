const express = require("express");
const { router } = require("./route");
const app = express();
const port = 8080;
app.use("/api",router);
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})