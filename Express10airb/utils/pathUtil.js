const path=require('path');
module.exports=path.dirname(require.main.filename);
//it get the main root folder path.
//require.main.filename == express11/app.js
//path.dirname(require.main.filename) == express11