const mongoose = require("mongoose");

const { Schema } = mongoose; //siempre se inicia con un schema

const blogSchema = new Schema({
  // debe ser fuertemente tipado
  title: { type: String },
  author: { type: String },
  content: { type: String },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now() },
  hidden: { type: Boolean },
  meta: {
    votes: Number,
    favs: Number,
  },
});
