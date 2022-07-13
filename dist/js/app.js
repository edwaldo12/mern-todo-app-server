"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = __importDefault(require("./config/connection"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
app.use(cors_1.default());
app.use(routes_1.default);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};
mongoose_1.default.set('useFindAndModify', true);
mongoose_1.default
    .connect(connection_1.default, options)
    .then(() => {
    app.listen(PORT, () => {
        console.info(`App is listening at http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    throw error;
});
// app.get('/', (req: Request, res: Response) => {
//   res.send('Halaman Kosong');
// });
