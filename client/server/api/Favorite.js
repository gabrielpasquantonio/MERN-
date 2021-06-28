const express = require("express");
const router = express.Router();

//mongodb user model
const { Favorite } = require("../models/Favorite");
const { User } = require("../models/User");
router.post("/favoritenumber", (req, res) => {
  //fin favorite information inside Favorite Collection by Product Id

  Favorite.find({ productId: req.body.productId }).exec((err, favorite) => {
    if (err) return res.satus(400).send(err);
    res.status(200).json({ success: true, FavoriteNumber: favorite.length });
  });
});

router.post("/favorited", (req, res) => {
  //find Favorite Information inside Favorite Collection by  Product Id userForm

  Favorite.find({
    productId: req.body.productId,
    userFrom: req.body.userFrom,
  }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (favorites.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, favorites: result });
  });
});

router.post("/addToFavorite", (req, res) => {
  //save the information about the product inside the favorite collection
  
  User.findOne({ _id: req.body.userFrom  }).exec((err, doc) => {
    

    if (err) return res.status(400).json({ success: false, err });
    console.log("add ", doc);
    console.log("req vody" ,req.body)
    const array = [...doc.favorites]
    array.push(req.body.favorite)
    doc.favorites = [...array]
  
    doc.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    });
  });
});

router.post("/removeFromFavorite", (req, res) => {
  //save the information about the product inside the favorite collection

  User.findOne({ _id: req.body.userFrom }).exec((err, doc) => {
    console.log("this is doc", doc);

    if (err) return res.status(400).json({ success: false, err });
    console.log("this is doc", doc);
    const array = doc.favorites.filter((item) => item !== req.body.favorite);
    doc.favorites = array || [];
    doc.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    });
  });
});

router.post("/getFavoritedProducts", (req, res) => {
  console.log("this is fff", req.body);
  //Need to find all of the Users that I am subscribing to From Subscriber Collection
  User.findOne({ _id: req.body._id }).exec((err, user) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favorites: user.favorites });
  });
});

module.exports = router;
