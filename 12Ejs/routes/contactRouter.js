const express=require('express');
const contactRouter=express.Router();
console.log ("contactRouter", contactRouter);
//for seperate routing
contactRouter.get('/contact',(req,res,next)=>{
       res.render('contact',{Pagetitle:"Contact-Page"});
});

const registeredName=[];
contactRouter.post('/contact',(req,res,next)=>{
       console.log('Welcome to home:',req.body,req.body.fullname);
       registeredName.push({fullname:req.body.fullname});
       res.render('post',{Pagetitle:"Post Page"});
});

exports.contactRouter=contactRouter;  // {contactRouter:<router-object>}
exports.registeredName=registeredName;














// module.exports={
//        contactRouter:contactRouter,
//        registeredName:registeredName,
// }
// const contactRouter={
//   // An object with internal properties like:
//   stack: [
//     { route: '/contact', method: 'GET', handler: [Function] },
//     { route: '/contact', method: 'POST', handler: [Function] }
//   ],
//   use: [Function],
//   get: [Function],
//   post: [Function],
//   ...
// }

// file = {
//   contactRouter: {
//     // This is an Express Router instance object
//     stack: [
//       {
//         route: {
//           path: '/contact',
//           methods: { get: true }
//         },
//         handle: [Function],  // your GET handler function
//         name: 'bound dispatch',
//         params: undefined,
//         path: undefined,
//         keys: []
//       },
//       {
//         route: {
//           path: '/contact',
//           methods: { post: true }
//         },
//         handle: [Function],  // your POST handler function
//         name: 'bound dispatch',
//         params: undefined,
//         path: undefined,
//         keys: []
//       }
//     ],
//     params: {},
//     _params: [],
//     caseSensitive: false,
//     mergeParams: false,
//     strict: false,
//     stack: [/* internal layers */],
//     methods: {},
//     // plus many internal methods and properties like:
//     get: [Function],
//     post: [Function],
//     use: [Function],
//     route: [Function],
//     // ... etc.
//   }
// }
