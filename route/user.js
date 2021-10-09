const express=require('express');
const router=express.Router();
const passport=require('passport');
const usersController=require('../controller/user');;

//For Sign Up Page to display
router.get('/signUp',usersController.signUp);
// For Sign In Page to display
router.get('/signIn',usersController.signIn);
//For Sign Up creating identity
router.post('/create',usersController.create);
//use passport as middleware for authentication
router.post('/createSession',passport.authenticate(
    'local',{failureRedirect: '/user/signUp'},
),usersController.createSession);
router.get('/signOut',usersController.destroySession);
module.exports=router;