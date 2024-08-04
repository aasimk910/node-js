const express = require("express");

const appp = express();

const name = "Sharma jii";

const blogrouter = require('./router/blog')

const blogs = require('./myModules/data')

appp.set("view engine", "ejs");

// appp.set('views', 'pages')
app.use('/blog', blogRouter)

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { data: blogs });
});

app.use('/blog', blogRouter)

app.post("/", (req, res) => {
  console.log("user posted something");
  console.log(req.body.title);
  console.log(req.body.content);
  blogs.push({ title: req.body.title, body: req.body.content });
  res.redirect("/");
});

app.listen(3000);