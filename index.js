const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://edward:qwerty1234@cluster0.l89ed.mongodb.net/easy-auth?retryWrites=true&w=majority`);
        app.listen(PORT, () => console.log(`server started on port ${PORT} port`));
    } catch (e) {
        console.log(e);
    }
};

start();