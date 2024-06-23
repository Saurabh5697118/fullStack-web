const express = require("express");
const app = express();

const db = require("./models");
const cors = require('cors')

app.use(express.json())
app.use(cors())         // in video: 3, we getting Cors

// Router

const postRouter = require('./routes/Posts')
app.use('/posts', postRouter)

const commentRouter = require('./routes/Comments')
app.use('/comments', commentRouter)


db.sequelize.sync().then(() => {
  app.listen(3005, (res) => {
    console.log(`Server running on port 3005`);
  })
});
