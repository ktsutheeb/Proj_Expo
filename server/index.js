const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
  origin: 'mongodb://localhost:27017/', //mongodb://localhost:27017/  https://mentor-connect-2.onrender.com
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Other middleware and routes
app.use(express.json());

// Example route
app.get('/api/your-endpoint', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
