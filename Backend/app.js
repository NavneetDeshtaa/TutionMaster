const express = require("express");
const mongoDB = require("./db");
const cors = require('cors');
const Mentor = require("./models/SignupMentor"); // Assuming your model is exported as Mentor

const app = express();
const PORT = 5005;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/Mentorsignup'));
app.use('/api', require('./routes/Studentsignup'));
app.use('/api', require('./routes/Userlogin'));


// ****************8 endpoint for fetching data from mongo using ID

// app.get('/api/mentors/:id', async (req, res) => {
//   try {
//     const mentorInstance = await Mentor.findOne({ _id: req.params.id });

//     if (!mentorInstance) {
//       return res.status(404).json({ error: 'Mentor not found' });
//     }

//     res.json(mentorInstance);
//   } catch (error) {
//     console.error('Error fetching mentor data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


app.listen(PORT, () => {
  console.log(`Server successfully running on ${PORT}`);
});

mongoDB();
