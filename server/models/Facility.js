import Mongoose from "mongoose";

const facilitySchema = new Mongoose.Schema(
  {
    facilityName: {
      type: String,
      required: true,
      text: true,
    },
    facilityId: {
      type: Number,
      required: true,
      unique: true,
    },
    purpose: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: String,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default Mongoose.model("Facility", facilitySchema);
