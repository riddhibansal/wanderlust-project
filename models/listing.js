const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: String,
    
    image: {
        type: String,
        default: "https://unsplash.com/photos/charming-white-buildings-with-colorful-doors-and-windows-WHqMp9uJt6g",
        set: (v) => v === "" ? "https://unsplash.com/photos/charming-white-buildings-with-colorful-doors-and-windows-WHqMp9uJt6g" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
