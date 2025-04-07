const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/signupDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error: ' + err));

// Middleware
app.use(bodyParser.json());

// Define the User schema for MongoDB
const userSchema = new mongoose.Schema({
    firstname: String,
    email: { type: String, unique: true },
    password: String
});

const User = mongoose.model('User', userSchema);

// Route to handle user signup
app.post('/signup', async (req, res) => {
    const { firstname, email, password } = req.body;

    // Basic validation
    if (!firstname || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        // Check if the email is already in use
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email is already in use.' });
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ firstname, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

        // Respond with success
        res.json({ success: true, message: 'Signup successful. You can now log in.' });

    } catch (error) {
        console.error('Error during signup: ', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});