const express = require('express');
const mentor = require('../models/SignupMentor');

const router = express.Router();

router.post('/mentorsignup', async (req, res) => {
  try {
    const{firstname,lastname,address,gender,state,district,dob,contact,email,education,experience,aboutyou,password,repeatpassword} = req.body ;

    console.log('Received data:', req.body);

    await mentor.create( {firstname,lastname,address,gender,state,district,dob,contact,email,education,experience,aboutyou,password,repeatpassword});
    res.status(201).json({ message: 'Signup successful' });
} 


  catch (error) {
  console.error('Error during signup:', error);
}
})

     
module.exports = router;