import { Mongoose } from "mongoose";


const BearSchema = new mongoose.Schema({
    // declare a schema. Your documents will 'look like this'
    species: {
        type: String, // There are many types in Mongoose that we'll learn about this week
        required: true, // required is a validator. It tells us that this field is required
        unique: true // unique is also a validator. It tells us this field can only exist once
    },
    latinName: {
        type: String,
        require: true
    },
    createOn: {
    type: Date, // Date is another type in Moongoose.
    default: Date.now()
    }
});


const bearsModel = mongoose.model('Bear', BearsSchema); // this is where we declare this as a model.
// by passing our BearSchema to this model we declare that it will be a collection in our DB

module.exports = bearsModel;