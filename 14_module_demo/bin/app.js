"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
function relative(path) {
    return path_1.default.join(__dirname, path);
}
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(relative('public')));
console.log(process.env.NODE_ENV);
app.listen(8000, () => {
    console.log(`Running application!`);
});
//# sourceMappingURL=app.js.map