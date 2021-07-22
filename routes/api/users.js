const express=require('express');
const router=express.Router();
const gravatar=require('gravatar');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const {check,validationResult}=require('express-validator');

const User=require('../../models/User');

//@route POST    api/users
//@description   Register User
//@access        Public
router.post('/',[
    //req.body values validation/sanitization
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min: 6}),
],async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
   
    let {name,email,password}=req.body;

    //Registering the user
    try {
        //See if the user exists, then send an error
        let user=await User.findOne({email:email});

        if(user){
            return res.status(400).json({errors: [{msg: "User already exists"}]});
        }

        //Get user's gravatar
        const avatar=gravatar.url(email, { 
            s: '200',//size
            r: 'pg',//rating
            d: 'mm',//default...if no avatar is found through email or you could do d:'404'
        });

        //Encrypt the password
        const salt=await bcrypt.genSalt(10);
        password=await bcrypt.hash(password,salt);

        user=new User({
            name,
            email,
            password,
            avatar
        });

        await user.save();

        //Return the json web Token...when user registers he/she/it is immediately logged in 
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