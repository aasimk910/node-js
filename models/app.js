// const express = require('express');
// const mongoose = require('mongoose');
// const Blog = require('./blogModel'); // Use Blog consistently

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// mongoose.connect('mongodb+srv://collegenp:Gookha910@app.qjbi4om.mongodb.net/?retryWrites=true&w=majority&appName=app')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log(err));

// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: __dirname });
// });

// app.get('/posts', async (req, res) => {
//     try {
//         let data = await Blog.find();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.post('/posts', async (req, res) => {
//     try {
//         await new Blog(req.body).save(); // Correct method: save
//         res.status(201).json({ message: 'New post added' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });



const express = require("express");
const mongoose = require("mongoose");

const app = express();

const Blog = require("./blogModel");

mongoose
  .connect(
    "mongodb+srv://collegenp:Gookha910@app.qjbi4om.mongodb.net/?retryWrites=true&w=majority&appName=app"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get("/posts", async (req, res) => {
  try {
    let data = await Blog.find();
    res.status(200).json(data); // Ensure status code 200 for successful request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json({ message: "New post added", post: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});