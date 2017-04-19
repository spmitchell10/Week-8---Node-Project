const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
// var mongoose = require('mongoose');

// mongo database 
// mongoose.connect('mongodb://localhost/test');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 



const data = [
  {
    users: "Han",
    age: "30",
    id: "C3P0",
    jslover: "Yes"

  },
  {
    users: "Luke",
    age: "25",
    id: "R2D2",
    jslover: "No" 
  }


];

// Get all of people
app.get('/people',function(req,res){
  res.json(data);
})

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
       id: req.body.id,
       jslover: req.body.jslover,
   }
      data.push(user);
      res.json(data);
  
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