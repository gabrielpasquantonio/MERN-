const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({

  userFrom:{
      type:Schema.Types.ObjectId,
      ref:'User'
  },
  productId : {
      type:String
  },
  productName : {
    type:String
},
productImage : {
    type:String
},
productAuthor : {
    type:String
}
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = {Favorite}