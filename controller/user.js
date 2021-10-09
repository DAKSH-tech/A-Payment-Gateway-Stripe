const User = require("../model/user");
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('sign_up',{
        title: 'Sign-Up'
    });
}
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('sign_in',{
        title: 'Sign-In'
    });
}
module.exports.create=function(req,res){
     if(req.body.password !=req.body.confirm_password){
         return redirect('back');
     }
     User.findOne({email:req.body.email},function(err,user){
           if(err){
               console.log('error in finding user in signing up');
               return res.redirect('back');
           }
           if(!user){
               User.create(req.body,function(err,user){
                if(err){
                    console.log('error in finding user in signing up');
                    return;
                }
                    return res.redirect('/user/signIn');
                })
            }else{
                   return res.redirect('/');
                }
           
     })
}
module.exports.createSession=function(req,res){
    return res.redirect('/');
}
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}