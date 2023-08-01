import mongoose from "mongoose";

const autoresSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {
      type: String, 
      required: [true, "O nome do(a) autor(a) é obrigatório"]
    },
    nacionality: {type: String}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autoresSchema);

export default autores;