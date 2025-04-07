// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Replace with your actual MongoDB Atlas connection string:
mongoose.connect('mongodb+srv://kalyanarchakam:HayaGreevA06@isg.tm3lu2v.mongodb.net/?retryWrites=true&w=majority&appName=ISG', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Schema and Model
const userSchema = new mongoose.Schema({
  firstname: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// API Endpoint for signup
app.post('/signup', async (req, res) => {
  const { firstname, username, password } = req.body;

  if (!firstname || !username || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const user = new User({ firstname, username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});