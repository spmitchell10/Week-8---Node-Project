const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
var mongoose = require('mongoose');
const User = require('./models/users.js')

// mongo database 
mongoose.connect('mongodb://Stephen:admin1@ds049466.mlab.com:49466/nodeproject');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 






// Get all of people
app.get('/people',function(req,res){
  User.find(function (err, User) {
  if (err) return console.error(err);
  res.json(User)
})
});
// creating data in the database. hardcoding data
app.get('/createperson',function(req,res){
    var small = new User({users: "Han", age:30, jslover:true});
    small.save(function (err) {
      if (err) console.log(err);
      res.json({success:"Yay!"});
    })
});

// Get a single person
app.get('/people/:id',function(req,res){
  let id = req.params.id

  let newUser = data.filter(user =>{
    if(user.id == id) //this is just saying that if the id is the id you're looking for return the id
      return true;
  })
  res.json(newUser)
});

// Post a new person
app.post('/people', function(req, res){
  
   let user = {
       users: req.body.users,
       age: req.body.age,
       jslover: req.body.jslover,
   }
      var small = new User(user);
       small.save(function (err) {
        if (err) console.log(err);
         res.json({success:"Yay!"});
    })
  
});

  
// Delete a person
app.post('/people/delete', function(req, res) {
   let id = req.params._id;
   console.log(id);

   data.forEach((user,idx)=>{
    if(user.id == id)
      data.splice(idx,1)
   
 })
   res.json(data);

});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

// app.listen(3001, function() {
//   console.log('Listening on port 3001');
// });

// User.remove({_id:id},(err)=>{
//    if (err) res.json({error:err});

// })