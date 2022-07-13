"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
app.use(cors_1.default());
// app.use(routes);
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// };
// mongoose.set('useFindAndModify', true);
// mongoose
//   .connect(uri, options)
//   .then(() => {
app.listen(PORT, () => {
    console.info(`App is listening at http://localhost:${PORT}`);
});
//   })
//   .catch((error) => {
//     throw error;
//   });
app.get('/', (req, res) => {
    res.send('jancuk');
});
