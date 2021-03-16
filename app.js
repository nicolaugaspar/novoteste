const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const app = express()
const linkRoute =require('./routes/link.Route')




/*let link = new Link({
	title:'ppaulo',
	description:'Link para facebook',
	url:'https://facebook.com/progrbr',
	
})*/

/*link.save().then(doc=>{
console.log(doc)

}).catch(error=>{

	console.log(error)
})
*/
//base de dados
/*let db = mongoose.connection;

db.on("error",()=>{console.log("houve erro")})
db.once("open",()=>{
	console.log("banco  carregado")


})*/

app.set("views",path.join(__dirname,'templates'));
app.set('view engine',"ejs")


 mongoose.connect('mongodb://localhost/newlinks',{
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(db=>{
	console.log(db)
}).catch(error=>{

	console.log(error)
});


app.use('/', linkRoute)

app.listen(9090, ()=>{

	console.log('servidor criando')
})