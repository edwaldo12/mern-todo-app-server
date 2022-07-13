import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from 'mongoose';
import uri from './config/connection';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(routes);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.set('useFindAndModify', true);
mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App is listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
