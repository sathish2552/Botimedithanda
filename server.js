const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Botimedhi Thanda server!');
});

// Serve signup.html
app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Serve login.html
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle the POST request for signup
app.post('/admin/signup', (req, res) => {
    const { username, password, confirmPassword } = req.body;

    // Simple validation
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match!');
    }

    // You can handle saving the user to the database or any other logic here
    console.log('User signed up with username:', username);

    // Send a success message (for now, can be changed to redirect)
    res.send('Signup successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
