import * as express from "express";
import { createServer } from "http";
import { config } from 'dotenv'
import { db } from './models'

config()
db.sequelize.sync()
const app = express();
app.use((req, res) =>{
  res.send(`
  <div>
    <h1>express server start http://localhost:${process.env.PORT}</h1>
  </div>`)
})
const server = createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
