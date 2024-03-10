const express = require('express');
const student = require('../models/SignupStudent');

const router = express.Router();

router.post('/studentsignup', async (req, res) => {
  try {
    const{firstname,lastname,mothername,fathername,address,gender,classes,state,district,dob,pincode,contact,email,password,repeatpassword} = req.body ;

    console.log('Received data:', req.body);

    await student.create( {firstname,lastname,mothername,fathername,address,gender,classes,state,district,dob,pincode,contact,email,password,repeatpassword});
    res.status(201).json({ message: 'Signup successful' });
} 


  catch (error) {
  console.error('Error during signup:', error);
}
})

     
module.exports = router;