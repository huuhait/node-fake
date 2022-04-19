import express from "express";
import mongoose from "mongoose";
import { Test } from "./models";

const app = express();

app.use(express.json());

// mongoose connection with user and password
mongoose.connect("mongodb://root:changeme@127.0.0.1:27017")

app.get("/", async(req, res) => {
  const t = new Test({
    name: "test" + new Date().getTime(),
  })

  await t.save()
  res.json(t.toJSON())
})

app.listen(3000);
app.listen((err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", 3000);
})
