const { validationResult, check } = require("express-validator");
const User = require("../models/user");
const bcrypt=require('bcryptjs');
exports.getLogin=(req,res,next)=>{
    res.render('auth/login',{Pagetitle:"login",currentPage:"login",isLoggedIn:false,
        errors:[],
        oldInput:{email:''},
        user:{},
    });
}

    exports.getPostLogin=async(req,res,next)=>{
        const {email,password}=req.body;
        const user= await User.findOne({email}); //email:ma database ko email.
        console.log(user);
        if(!user){
        return res.status(422).render('auth/login',{
            Pagetitle:'login',
            currentPage:'login',
            isLoggedIn:false,
            errors:['Invalid email or password'],
            oldInput:{email},
            user:{}
        });
        }
        
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(422).render('auth/login',{
                Pagetitle:'Login',
                currentPage:'login',
                isLoggedIn:false,
                errors:['Invalid Password'],
                oldInput:{email} ,
                user:{}
            })
        }

        req.session.isLoggedIn=true;
        req.session.user=user; //aaba yeslai sabai thau ma use garnu parxa.
        await req.session.save();//session ko value haru lai database ma save garney with user data.
        res.redirect('/');    
    //res.cookie("isLoggedIn",true);// aaba yo cookie chai client ko storage ma save hunxa.
    //req.isLoggedIn=true;
   // req.session.isLoggedIn=true;//The session is automatically linked to a unique session ID stored in a cookie (in the browser).

   // res.redirect('/');
}

exports.postLogout=(req,res,next)=>{
    //res.clearCookie('isLoggedIn');
    req.session.destroy(()=>{
        res.redirect('/login');
    });
}

exports.getSignup=(req,res,next)=>{
    res.render('auth/signup',{
        Pagetitle:"Signup",
        currentPage:"Signup",
        isLoggedIn:false,
        errors:[],
        oldInput:{firstName:'',lastName:'',email:'',password:'',userType:''},
         user:{},
    });
}

exports.PostSignup=[
    //for the firstName.
     check('firstName')
    .trim()
    .isLength({min:3})
    .withMessage('First name must be of 3 character long')
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('Firstname should contain only alphabets.'),


     //for lastname.
    check('lastName')
    .matches(/^[A-Za-z\s]*$/)
    .withMessage('lastname should contain only alphabets.'),
   

    //for email
    check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
    

    //for password
    check('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters long')
  .matches(/[A-Z]/)
  .withMessage('Password must contain at least one uppercase letter')
  .matches(/[a-z]/)
  .withMessage('Password must contain at least one lowercase letter')
  .matches(/[0-9]/)
  .withMessage('Password must contain at least one number')
  .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
  .withMessage('Password must contain at least one special character'),

    
     //for confirm password
      check('confirmPassword')
      .trim()
      .custom((value,{req})=>{
        if(value!==req.body.password){
            throw new Error('Password do not match')
        }
        return true;
      }),

      //for user type
      check('userType')
      .notEmpty()
      .withMessage('Please select a user Type')
      .isIn(['guest','host'])
      .withMessage('Invalid user Type'),


      //terms and condition
      check('terms')
      .notEmpty()
      .withMessage('Please accept the terms and conditions')
      .custom((value,{req})=>{
        if(value!=='on'){
            throw new Error('Please accept the terms and the condition')
        }
        return true;
      }),
    
    
   async (req,res,next)=>{
    const {firstName,lastName,email,password,userType}=req.body;
    const errors=validationResult(req); //mathi ko input field ma kei error ka ki xaina vanerw check garxa.
    if(!errors.isEmpty()){  
        return res.status(422).render('auth/signup',{
            Pagetitle:'Signup',
            currentPage:'signup',
            isLoggedIn:false,
            errors:errors.array().map(err=>err.msg),
            oldInput:{firstName,lastName,email,password,userType},
            user:{}
         })           //error kei na kei xa vaney.
         
    }
  try{
    const hashedPassword=  await bcrypt.hash(password,12);
    const user= new User({firstName,lastName,email,password:hashedPassword,userType});
    await user.save();
    res.redirect('/login');
   } catch(err){
     console.log('Signup',err);
     return res.status(422).render('auth/signup',{
      Pagetitle: 'Signup',
      currentPage: 'signup',
      isLoggedIn: false,
      errors: [err.message],
      oldInput: { firstName, lastName, email,password, userType }, // ✅ exclude password
      user:{}
    });
  }  
}];