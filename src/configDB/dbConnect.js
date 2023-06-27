import mongoose from "mongoose";

mongoose.connect('mongodb+srv://fmlmathzera:palmeiras01%40@alura.k0jsry9.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;