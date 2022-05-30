const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");



router.post('/register', UserController.create);
router.get('/getuser', UserController.find);
router.get('/getuser/:id', UserController.find);
router.put('/updateuser/:id', UserController.update);
router.delete('/deleteuser/:id', UserController.delete);




module.exports = router;