const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();

const date = require(__dirname + "/date.js");



const items = ['Items 1','Items 2','Items 3'];
const item = '';
const workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extented: true}))


app.use(express.static('public'));


app.get("/", function (req, res) {


  const today = date.getDate();

  res.render("list", { listTitle: today, nItems: items });
});




app.post("/", function (req, res) {

  const item = req.body.newItem;

if(req.body.list === 'Work'){
  workItems.push(item);
  res.redirect('/work')
}
else{
  items.push(item);
  res.redirect('/')
}

});

app.get('/work', function(req , res){
  res.render('list', {listTitle: "Work list", nItems: workItems})
})


app.post('/work', function(req , res){
  workItems.push(item);
  res.redirect('/work')
})

app.get('/about', function(req , res){
  res.render('about')
})

app.listen(3000, function () {
  console.log("Server has started!");
});
