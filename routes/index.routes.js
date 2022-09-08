const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


const phonesRoutes = require("./phones.routes.js");
router.use("/phones", phonesRoutes);

module.exports = router;
