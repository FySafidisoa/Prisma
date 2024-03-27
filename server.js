import express from 'express';
import Medecin from './route';
const PORT = 4000;
const app = express();

app.use(express.json());
app.use('/', Medecin);
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ${PORT} `);
});
