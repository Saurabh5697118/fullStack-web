const express = require("express");

const { Posts } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  // res.send('hello World')
  // res.json('hello World')
  const lists = await Posts.findAll();
  res.json(lists);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
