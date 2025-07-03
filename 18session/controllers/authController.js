exports.getLogin=(req,res,next)=>{
    res.render('auth/login',{Pagetitle:"login",currentPage:"login",isLoggedIn:false});
}

exports.getPostLogin=(req,res,next)=>{
    console.log(req.body);
    //res.cookie("isLoggedIn",true);// aaba yo cookie chai client ko storage ma save hunxa.
    //req.isLoggedIn=true;
    req.session.isLoggedIn=true;//The session is automatically linked to a unique session ID stored in a cookie (in the browser).

    res.redirect('/');
}

exports.postLogout=(req,res,next)=>{
    //res.clearCookie('isLoggedIn');
    req.session.destroy(()=>{
        res.redirect('/login');
    });
    
}