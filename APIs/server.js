import express, { response } from 'express';
import mongoose from 'mongoose';

//definition of Database
const userSchema = mongoose.Schema({
    name: String,
    age: Number
})

const userCollection = mongoose.model('User', userSchema);
(async () => {
    const connectionIN = await mongoose.connect('mongodb+srv://aviton440_db_user:LbUfX2py6u30RG5c@mycluster1.08i6m7w.mongodb.net/')
    // console.log(connectionIN);
    console.log(connectionIN.connection.host);

})();
const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.send('hello')
})

//create API
app.post('/create-user', async (req, res) => {
    console.log(req.body);
    const USERS = req.body;
    const createdUser = await userCollection.create(USERS);
    console.log(createdUser);
    console.log(req.body);
    res.json({
        id: createdUser._id,
        message: 'User data received successfully',
        user: req.body
    });
});

app.get('/get-all-users', async (req, res) => {
    const USERS = await userCollection.find();
    res.json(USERS);
})

app.get('/get-single-user', async (req, res) => {
    const users = await userCollection.findOne({ name: req.body.name });
    res.json(users);
    console.log(users)
})

//updated user
app.put('/update-user', async (req, res) => {

    // console.log(req.query.id);
    // const { id } = req.query;



    const updatedUser = await userCollection.findByIdAndUpdate(


        req.query._id,
        req.body,
        { new: true });

    res.json({
        message: 'User updated successfully',
        user: updatedUser
    });
    console.log(updatedUser);


});

//deleted user
app.delete('/deleted-user', async (req, res) => {

    // console.log(req.query.id);
    // const { id } = req.query;



    const deletedUser = await userCollection.findByIdAndDelete(


        req.query._id,

        { new: true });

    res.json({
        message: 'User deleted successfully',
        user: deletedUser,
    });
    console.log(deletedUser);



});
app.listen(3000, () => {
    console.log(`server is running on post 3000 `)
})