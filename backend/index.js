const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/CRUD')


app.get('/',(req,res) => {
    UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err))
})


// for update and getting user from id based on mongodb
app.get('/getUser/:id',(req,res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
    .then((users) => res.json(users))
    .catch((err) => res.json(err))
})

app.post('/createUser', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.status(201).json(users))
    .catch(error => res.status(500).json({ message: error.message }));
});

app.put('/updateUser/:id',(req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name, email:req.body.email, age:req.body.age})
    .then((users) => res.json(users))
    .catch((err) => res.json(err))

})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
    .then(() => res.json({ message: "User deleted successfully!" }))
    .catch(err => res.status(500).json(err));
});



app.listen(5000, () => console.log(`Server running on port 5000`));
