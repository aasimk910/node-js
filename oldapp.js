const express = require('express');
const app = express();

// Define the blogs array at the top
const blogs = [
    { title: 'First Blog Post', body: 'This is the content of the first blog post.' },
    { title: 'Second Blog Post', body: 'This is the content of the second blog post.' }
];

app.set('view engine', 'ejs');
app.set('views', 'views'); // Ensure this line is correctly set to the directory containing your views

app.use(express.urlencoded({ extended: true })); // This line is required to parse the form data

app.get('/', (req, res) => {
    res.render('index', { data: blogs });
});

app.post('/', (req, res) => {
    console.log('User posted something');
    console.log(req.body.title);
    console.log(req.body.body);

    blogs.push({ title: req.body.title, body: req.body.body });
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = blogs;
