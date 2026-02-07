const express = require("express");
const app = express();

const postsRoutes = require("./Routes/posts.routes");

app.use(express.json());
app.use("/api/v1/posts", postsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
