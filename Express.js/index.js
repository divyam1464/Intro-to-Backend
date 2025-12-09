// const express = require("express");

import express from "express";

const app = express();

const PORT = 3000;

app.get("/error", () => {
  throw new Error("This is test error");
});

app.get("/", (req, res) => {
  console.log("Middle");
  res.send("Hello, Express");
});

app.use((err, req, res, next)=>{
  console.error(err.message);
  res.send('Internal Server Error');
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
