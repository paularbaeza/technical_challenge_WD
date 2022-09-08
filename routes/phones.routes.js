const router = require("express").Router();
const Phone = require("../models/Phone.model")

// GET "/phones" =>  show all phones

router.get("/", async (req, res, next) => {
  try {
    const phonesList = await Phone.find();
    res.json(phonesList);
  } catch (err) {
    next(err);
  }
});


// GET "/phones/:id"  => show a phone details

router.get("/:id", async (req, res, next) => {
    const {id} = req.params
    numberId = Number(id)
    try {
      const phoneDetails = await Phone.find({id:numberId});
      res.json(phoneDetails);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;