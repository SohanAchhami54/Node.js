exports.errorPage=(req,res,next)=>{ //executed for the home page.
    res.render('error',{
        Pagetitle:"Error Page",
        isLoggedIn:req.isLoggedIn,
        user:req.session.user
    }); 
};