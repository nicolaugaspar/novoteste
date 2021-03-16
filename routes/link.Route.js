const express = require('express')
const router= express.Router()

const linkController = require('../controllers/linkController')
//app.set("views",path.join(__dirname,'views'));
//router.set('view engine',"ejs")

router.get('/all', linkController.allLinks)

router.post('/',express.urlencoded({ extended:true }), linkController.addLink)

router.get("/:title",linkController.redirect)

router.get("/", (req, res)=>res.render('index', {error:false, body:req.body}))


router.get('/user',function(req, res){
let users = [{
	id:0,
  name:"paulo",
  phone:"983849058",
},
{ id:2,
  name:"nicolau",
  phone:"983849058",
},
{ id:4,
  name:"gaspar",
  phone:"983849058"
  }
]
	res.render('../views/user', {
	 users:users})
})

router.get('/home',function(req, res){

	res.render('../views/home')
})

module.exports = router