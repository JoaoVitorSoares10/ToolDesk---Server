"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const config_1 = __importDefault(require("./database/config"));
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(config_1.default.url)
    .then(() => {
    console.log('connected');
})
    .catch((err) => {
    console.log('connection error' + err);
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.listen(port, () => {
    console.log("listening on port " + port);
});
//# sourceMappingURL=index.js.map