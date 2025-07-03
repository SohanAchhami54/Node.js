//save()
//getFavorites()
//addFavorite()
//deleteFavHome()

const mongoose=require('mongoose');
const favoriteSchema=mongoose.Schema({
  id:{
    type:mongoose.Schema.Types.ObjectId,//house ko id chai Favorite ma rakheko. 
    ref:'Home',//kun collection ko id  i.e. homeCollection ko id ho yo
    required:true,
    unique:true,
  },
})



module.exports=mongoose.model('Favoritee',favoriteSchema);
//favoriteSchema bata chai Favorite vanney model banauney hai.