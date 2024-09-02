const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ruth:root@cluster0.ubzlhat.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schema and model for user
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', (req, res) => {
    const { fullName, username, password } = req.body;

    // Validate request body
    if (!fullName || !username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newUser = new User({ fullName, username, password });
    newUser.save()
        .then(() => res.status(201).json({ message: 'User created successfully' }))
        .catch(err => {
            console.error('Error saving user:', err);
            if (err.code === 11000) {
                return res.status(409).json({ error: 'Username already exists' });
            }
            res.status(500).json({ error: 'Failed to create user' });
        });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate request body
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    User.findOne({ username, password })
        .then(user => {
            if (user) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json({ error: 'Failed to login' });
        });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
