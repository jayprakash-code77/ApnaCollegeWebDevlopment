const express = require("express");
const app = express();
const postRouter = require("./routes/post.js");
const userRouter = require("./routes/user.js")

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("Server running on PORT: 3000");
})