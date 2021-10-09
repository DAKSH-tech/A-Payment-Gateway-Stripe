const express=require('express');
const passport=require('passport');
const router=express.Router();
const paymentgatCon=require('../controller/paymentGat');
const homeCont=require('../controller/home');
router.get('/',homeCont.home);
router.use('/user',require('./user'));
router.get('/success',function(req,res){
    return res.render('success');
})
router.post('/create-checkout-session',passport.checkAuthentication,paymentgatCon.payment_data);
module.exports=router;
