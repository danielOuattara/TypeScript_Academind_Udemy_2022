"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.static("./public"));
app.use(express_1.default.json());
app.use("/todos", todoRoutes_1.default);
app.get("/", (req, res, next) => {
    res.status(200).send("<h1>Welcome to todos application</h1>");
});
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
app.listen(3000);
