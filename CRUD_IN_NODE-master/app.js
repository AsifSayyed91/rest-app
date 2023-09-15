const express = require("express");
const app = express();

const mongoose = require("mongoose");
const blogRoutes = require("./routes/blog");

// Connect to the mongodb..
// const dbURI = "mongodb://127.0.0.1/node_tuts";
const dbURI = "mongodb+srv://asifsayyed1789:0987654@cluster0.6od3jto.mongodb.net/";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connected to the database"))
  .catch((err) => console.log(err));

// Form POST data encode..
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Templating engine..
app.set("view engine", "ejs");


// redirect..
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

// Route..
// Example of direct route app.use("/blogs", require("./routes/blog"));
app.use("/blogs", blogRoutes);

// 404 page..
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});

// app.listen(3000);

app.listen(3050, () => {
  console.log(`Server listening on port 3050`);
});
