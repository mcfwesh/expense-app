const express = require("express");
const User = require("../models/User");
const Item = require("../models/Item");
const Expense = require("../models/Expense");
const Receipt = require("../models/Receipt");
const multer = require("multer"); //for handling multipart data eg uploading files
const uploadCloud = require("../config/cloudinary.js");

const router = express.Router();
const app = express();
const upload = multer();
const ensureLogin = require("connect-ensure-login");
const passport = require("passport");

router.get("/settings", ensureLogin.ensureLoggedIn(), (req, res) => {
  Receipt.find({ user: req.user._id }).then((receipt) => {
    res.render("items/settings", { receipt: receipt });
  });
});

router.post("/settings", uploadCloud.single("photo"), (req, res, next) => {
  const { title, description, date } = req.body;
  const imgPath = req.file.url;

  const imgName = req.file.originalname;

  Receipt.create({
    title,
    description,
    date,
    imgPath,
    imgName,
    user: req.user._id,
  })
    .then((receipt) => {
      res.redirect("/settings");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
