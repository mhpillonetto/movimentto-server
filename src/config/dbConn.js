const mongoose  = require('mongoose');

const connection_string = process.env.DATABASE_URI || "mongodb+srv://mhpillonetto:snapcaster@cluster0.mikyteh.mongodb.net/movimentto-dev?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(connection_string, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB