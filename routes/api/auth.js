const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const config=require('config');
const bcrypt=require('bcryptjs');
const {check,validationResult}=require('express-validator');

const auth=require('../../middleware/auth');
const User=require('../../models/User');

//@route GET    api/auth
//@description  Get logged in/registered user
//@access       Public
router.get('/',auth,async (req,res)=>{
    try {
       
        const user=await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
})

//@route POST    api/auth
//@description   Login User
//@access        Public
router.post('/',[
    //req.body values validation/sanitization
    check('email','Please include a valid email').isEmail(),
    check('password','Password is required').exists(),
],async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
   
    let {email,password}=req.body;

    //Registering the user
    try {
        //See if the user exists, then send an error
        let user=await User.findOne({email:email});

        if(!user){
            return res.status(400).json({errors: [{msg: "Invalid credentials"}]});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({errors: [{msg: "Invalid credentials"}]});
        }

        //Return the json web Token...when user he/she/it is immediately logged in 
        const payload={
            user: {
                id: user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{expiresIn: 360000},(err,token)=>{
            if(err){
                throw err
            }
            res.json({ token });
        });

    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }  
})

module.exports = router;