import Mongoose from "mongoose";

const technologySchema = new Mongoose.Schema(
  {
    machineName: {
      type: String,
      required: true,
      text: true,
    },
    machineId: {
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
    eta: {
      type: Number,
    },
    procedure: {
      type: String,
    },
    precaution: {
      type: String,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default Mongoose.model("Technology", technologySchema);
