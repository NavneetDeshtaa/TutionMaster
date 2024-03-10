const express = require('express');
const { body, validationResult } = require('express-validator');
const Mentor = require('../models/SignupMentor');
const Student = require('../models/SignupStudent');

const router = express.Router();

router.post('/login', [
     body('email').isEmail(),
     body('password').isLength({ min: 5 }),
 ], async (req, res) => {
     try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
             return res.status(400).json({ errors: errors.array() });
         }
 
         const { email, password } = req.body;
 
         // Check if the credentials match a student
         const foundStudent = await Student.findOne({ email, password });
         if (foundStudent) {
             return res.json({ success: true, userType: 'student' });
         }
 
         // Check if the credentials match a mentor
         const foundMentor = await Mentor.findOne({ email, password });
         if (foundMentor) {
             return res.json({ success: true, userType: 'mentor' });
         }
 
         // No match found for either student or mentor
         return res.status(400).json({ errors: 'Invalid credentials.' });
     } catch (error) {
         console.error(error);
         return res.status(500).json({ errors: 'Internal Server Error' });
     }
 });
 
 module.exports = router;
