const Link = require('../models/Link')

const redirect = async(req, res)=>{
let title = req.params.title;
try{
    let doc = await Link.findOne({title})
    console.log(doc)
      //res.send(doc)
      res.redirect(doc.url)
  
}catch(error){

  res.send(error)
}


}
const addLink = async (req, res)=>{

let link = new Link(req.body)
try {

let doc = link.save()
res.send('Link adicionado com sucesso')
} catch(error){

res.render('index',{error, body:req.body})
   }
}
//busca no base de dados
const allLinks = async(req, res)=>{
try {

let links = await Link.find({})
res.render('all', { links } )
} catch(error){

  res.send(error)
   }
}
module.exports={redirect, addLink, allLinks}